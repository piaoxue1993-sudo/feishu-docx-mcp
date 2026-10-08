import fs from "node:fs/promises";
import path from "node:path";

const API = "https://open.feishu.cn/open-apis";

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : "";
}

function env(name, optional = false) {
  const value = process.env[name]?.trim();
  if (!value && !optional) throw new Error(`缺少环境变量：${name}`);
  return value || "";
}

async function jsonFetch(url, options = {}) {
  const response = await fetch(url, options);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || (payload.code ?? 0) !== 0) {
    throw new Error(`飞书 API 错误 ${payload.code ?? response.status}: ${payload.msg ?? response.statusText}`);
  }
  return payload.data ?? {};
}

async function token() {
  const data = await jsonFetch(`${API}/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ app_id: env("FEISHU_APP_ID"), app_secret: env("FEISHU_APP_SECRET") }),
  });
  return data.tenant_access_token;
}

async function uploadDocx(accessToken, filePath, folderToken) {
  const bytes = await fs.readFile(filePath);
  const stat = await fs.stat(filePath);
  const form = new FormData();
  form.append("file_name", path.basename(filePath));
  form.append("parent_type", "explorer");
  form.append("parent_node", folderToken || "");
  form.append("size", String(stat.size));
  form.append("file", new Blob([bytes]), path.basename(filePath));
  return jsonFetch(`${API}/drive/v1/files/upload_all`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}` },
    body: form,
  });
}

async function createImportTask(accessToken, fileToken, title, folderToken) {
  const body = {
    file_extension: "docx",
    file_token: fileToken,
    type: "docx",
    file_name: title,
    point: { mount_type: 1, mount_key: folderToken || "" },
  };
  return jsonFetch(`${API}/drive/v1/import_tasks`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
}

async function waitForImport(accessToken, ticket) {
  for (let i = 0; i < 90; i += 1) {
    const data = await jsonFetch(`${API}/drive/v1/import_tasks/${encodeURIComponent(ticket)}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const result = data.result ?? data;
    if (result.job_status === 0 || result.status === "success" || result.token || result.url) return result;
    if (result.job_status === 2 || result.status === "failed") {
      throw new Error(`飞书导入失败：${result.job_error_msg || result.error_msg || "未知错误"}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  throw new Error("飞书导入超时：已上传文件，但未在限定时间内完成转换");
}

async function main() {
  const filePath = path.resolve(arg("--docx"));
  if (!arg("--docx")) throw new Error('用法：node export-word-to-feishu.mjs --docx "报告.docx" [--title "标题"] [--folder-token "文件夹token"]');
  if (path.extname(filePath).toLowerCase() !== ".docx") throw new Error("仅支持 .docx 文件");
  await fs.access(filePath);
  const title = arg("--title") || path.basename(filePath, path.extname(filePath));
  const folderToken = arg("--folder-token") || env("FEISHU_FOLDER_TOKEN", true);
  const accessToken = await token();
  const upload = await uploadDocx(accessToken, filePath, folderToken);
  const fileToken = upload.file_token || upload.token;
  if (!fileToken) throw new Error("上传成功但未返回 file_token");
  const task = await createImportTask(accessToken, fileToken, title, folderToken);
  const ticket = task.ticket || task.task_id;
  if (!ticket) throw new Error("创建导入任务成功但未返回 ticket");
  const result = await waitForImport(accessToken, ticket);
  const documentToken = result.token || result.document_token || result.file_token;
  const domain = env("FEISHU_DOC_DOMAIN", true).replace(/^https?:\/\//, "").replace(/\/+$/, "");
  const url = result.url || (domain && documentToken ? `https://${domain}/docx/${encodeURIComponent(documentToken)}` : "");
  console.log(JSON.stringify({ title, document_token: documentToken || "", url, imported_from: filePath }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

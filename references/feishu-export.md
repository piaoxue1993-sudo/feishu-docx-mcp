# 飞书云文档导出

当用户要求飞书交付时，先完成并验证本地 Word 图册，再将该 `.docx` 作为唯一导入源。不要用纯文本重建图册，否则会丢失图片、表格与版式。

## 本机配置

首次使用时运行 `scripts/setup-feishu-windows.ps1`，在本机输入：

- `FEISHU_APP_ID`
- `FEISHU_APP_SECRET`
- `FEISHU_DOC_DOMAIN`
- 可选 `FEISHU_FOLDER_TOKEN`

不得要求用户在聊天、截图、代码或日志中粘贴 App Secret。应用需要具备云空间文件上传、云文档导入/创建及目标文件夹访问权限，并已发布可用版本。

## 导出命令

```powershell
node scripts/export-word-to-feishu.mjs --docx "完整路径\报告.docx" --title "云文档标题"
```

如未设置环境变量，可加 `--folder-token` 指定目标文件夹。脚本会上传 Word、创建导入任务、轮询转换结果并输出 JSON，其中 `url` 为交付链接。

## 完成标准

只有满足以下条件才可报告飞书交付成功：

1. 脚本退出码为 0；
2. 返回非空 `document_token` 或 `url`；
3. 链接可打开，文档标题、场景表和图片数量抽查正确。

若缺少配置或接口权限失败，保留已验证的本地 Word 与 images 文件夹，明确报告飞书导出未完成及错误，不得把语法检查、上传成功或空文档创建当作转换成功。

$appId = Read-Host "cli_aa308b0dce78dbc4"
$appSecret = Read-Host "请输入飞书 App Secret" -XhUrTLXJPYdBAvaxy9gGef2tGvDCbS7T
$domain = Read-Host "my.feishu.cn/drive/home/"
$folderToken = Read-Host "可选：目标云空间文件夹 token；直接回车则使用应用默认位置"

$secretPtr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($appSecret)
try {
    $plainSecret = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($secretPtr)
    [Environment]::SetEnvironmentVariable("FEISHU_APP_ID", $appId, "User")
    [Environment]::SetEnvironmentVariable("FEISHU_APP_SECRET", $plainSecret, "User")
    [Environment]::SetEnvironmentVariable("FEISHU_DOC_DOMAIN", $domain, "User")
    [Environment]::SetEnvironmentVariable("FEISHU_FOLDER_TOKEN", $folderToken, "User")
} finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($secretPtr)
    $plainSecret = $null
}

Write-Host "配置已保存到当前 Windows 用户环境变量。请重新启动 Codex 后再执行飞书导出。"

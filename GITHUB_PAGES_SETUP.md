# GitHub Pages 自动部署配置指南

## 📌 概述

本指南将帮助您配置 GitHub Pages 自动部署，使得每次推送代码到 main 分支时，网站会自动构建和部署。

## ✅ 前置条件

- ✅ 项目已推送到 GitHub
- ✅ GitHub Actions 工作流已配置（`.github/workflows/deploy-pages.yml`）
- ✅ 仓库为 Public（公开）

## 🚀 配置步骤

### 步骤 1：启用 GitHub Pages

1. 打开你的 GitHub 仓库：https://github.com/samuelhu/phonics-guide-website
2. 进入 **Settings** 标签
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择 **GitHub Actions**
5. 点击 **Save**

### 步骤 2：验证工作流

1. 进入仓库的 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待工作流完成（通常需要 2-5 分钟）
4. 工作流成功后，你会看到绿色的 ✓ 标记

### 步骤 3：访问部署的网站

部署完成后，你的网站将在以下地址可访问：

```
https://samuelhu.github.io/phonics-guide-website
```

**注意**：首次部署可能需要几分钟才能生效。如果立即访问显示 404，请等待 2-3 分钟后刷新。

## 📊 工作流说明

### 自动部署流程

```
推送代码到 main 分支
    ↓
GitHub Actions 自动触发
    ↓
安装依赖 (pnpm install)
    ↓
构建项目 (pnpm run build)
    ↓
上传构建产物到 GitHub Pages
    ↓
网站自动部署完成
```

### 工作流文件位置

`.github/workflows/deploy-pages.yml`

## 🔍 监控部署状态

### 查看部署日志

1. 进入仓库 **Actions** 标签
2. 点击最新的 "Deploy to GitHub Pages" 工作流
3. 点击 "build" 或 "deploy" 任务查看详细日志

### 常见状态

| 状态 | 含义 | 操作 |
|------|------|------|
| ✓ | 部署成功 | 访问网站 |
| ✗ | 部署失败 | 查看日志排查问题 |
| ⏳ | 部署中 | 等待完成 |

## 🔧 自定义配置

### 修改部署分支

如果要从其他分支部署，编辑 `.github/workflows/deploy-pages.yml`：

```yaml
on:
  push:
    branches: [ develop ]  # 改为你的分支名
```

### 修改构建命令

如果需要自定义构建命令，编辑工作流文件中的 `Build` 步骤：

```yaml
- name: Build
  run: pnpm run build  # 修改为你的构建命令
```

### 修改部署目录

如果构建输出目录不同，编辑 `Upload artifact` 步骤：

```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v2
  with:
    path: './dist/public'  # 改为你的输出目录
```

## 🌐 配置自定义域名（可选）

### 步骤 1：购买或准备域名

- 从域名注册商购买域名
- 或使用现有的域名

### 步骤 2：配置 DNS

在你的域名注册商的 DNS 设置中，添加以下记录：

**方式 A：使用 CNAME 记录（推荐）**

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | www | samuelhu.github.io |

**方式 B：使用 A 记录**

| 类型 | 名称 | 值 |
|------|------|-----|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### 步骤 3：在 GitHub 配置自定义域名

1. 进入仓库 **Settings** → **Pages**
2. 在 **Custom domain** 字段输入你的域名（例如 `phonics-guide.example.com`）
3. 点击 **Save**
4. GitHub 会自动生成 `CNAME` 文件

### 步骤 4：验证配置

1. 等待 DNS 生效（通常需要 24 小时）
2. 访问你的自定义域名
3. 应该能看到网站内容

## 🔐 安全配置

### 启用 HTTPS

GitHub Pages 自动为所有网站启用 HTTPS。

### 配置 HSTS（可选）

在 GitHub Pages 设置中启用 HTTPS 后，可以启用 HSTS：

1. 进入 **Settings** → **Pages**
2. 勾选 **Enforce HTTPS**

## 🆘 常见问题

### Q: 部署失败，显示 "Build failed"

**解决方案**：
1. 查看 GitHub Actions 日志
2. 检查构建命令是否正确
3. 确保所有依赖已安装
4. 检查 Node.js 版本兼容性

```bash
# 本地测试构建
pnpm install
pnpm run build
```

### Q: 网站无法访问

**解决方案**：
1. 检查部署状态是否为成功
2. 清除浏览器缓存（Ctrl+Shift+Delete）
3. 等待 2-3 分钟后重试
4. 检查 URL 是否正确

### Q: 自定义域名不工作

**解决方案**：
1. 检查 DNS 记录是否正确配置
2. 使用 `nslookup` 或 `dig` 命令验证 DNS
3. 等待 DNS 生效（可能需要 24 小时）
4. 检查 GitHub Pages 设置中的自定义域名

```bash
# 验证 DNS 配置
nslookup phonics-guide.example.com
```

### Q: 如何回滚到之前的版本

**解决方案**：
```bash
# 查看提交历史
git log --oneline

# 回滚到之前的提交
git revert <commit-hash>
git push origin main

# GitHub Pages 会自动重新部署
```

### Q: 部署后页面加载缓慢

**解决方案**：
1. 检查网络连接
2. 清除浏览器缓存
3. 使用浏览器开发者工具（F12）检查加载时间
4. 优化构建产物大小

## 📈 性能优化

### 减小构建产物大小

编辑 `vite.config.ts`：

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
      },
    },
  },
});
```

### 启用压缩

GitHub Pages 自动启用 gzip 压缩。

### 使用 CDN

可以配置 Cloudflare 等 CDN 加速访问。

## 📚 有用的链接

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Vite 构建优化](https://vitejs.dev/guide/build.html)

## ✅ 部署检查清单

- [ ] GitHub Pages 已启用
- [ ] 工作流文件已创建
- [ ] 首次部署已完成
- [ ] 网站可以访问
- [ ] 所有功能正常工作
- [ ] 音频发音功能正常
- [ ] 响应式设计正常
- [ ] 自定义域名已配置（可选）
- [ ] HTTPS 已启用
- [ ] 缓存已清除

## 🎉 完成！

现在你的网站已经配置了 GitHub Pages 自动部署。每次推送代码到 main 分支时，网站会自动构建和部署。

**下一步**：
1. 推送代码测试自动部署
2. 配置自定义域名（可选）
3. 监控部署状态
4. 定期更新内容

---

**部署地址**：https://samuelhu.github.io/phonics-guide-website

**需要帮助？** 查看本文档的常见问题部分或 GitHub 官方文档。

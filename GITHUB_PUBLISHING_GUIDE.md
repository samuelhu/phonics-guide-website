# GitHub 发布指南

## 📌 概述

本指南将帮助您将自然拼读网站项目发布到 GitHub，并配置自动部署。

## 🔑 前置要求

1. **GitHub 账户** - 如果没有，请在 [github.com](https://github.com) 注册
2. **Git 已安装** - 检查：`git --version`
3. **GitHub CLI（可选）** - 用于快速创建仓库

## 📝 方式一：使用 Manus 管理界面（推荐）

### 步骤 1：打开 Manus 管理界面

1. 登录 Manus 平台
2. 进入项目管理界面
3. 找到 **Settings** → **GitHub** 选项

### 步骤 2：连接 GitHub

1. 点击 **Export to GitHub**
2. 授权 Manus 访问您的 GitHub 账户
3. 选择仓库所有者和名称
4. 点击 **Export**

### 步骤 3：验证

1. 访问 GitHub 查看新创建的仓库
2. 所有代码已自动推送
3. 可以立即在 GitHub 上部署

---

## 🔧 方式二：使用 Git 命令手动发布

### 步骤 1：创建 GitHub 仓库

#### 方式 A：通过 GitHub 网站
1. 登录 [github.com](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 填写信息：
   - **Repository name**: `phonics-guide-website`
   - **Description**: `Ultimate Phonics Learning Guide - 终极自然拼读全能指南`
   - **Visibility**: Public（公开）或 Private（私有）
   - **Initialize with**: 不勾选（我们已有代码）
4. 点击 **Create repository**

#### 方式 B：使用 GitHub CLI
```bash
gh repo create phonics-guide-website \
  --description "Ultimate Phonics Learning Guide" \
  --public \
  --source=. \
  --remote=origin \
  --push
```

### 步骤 2：配置 Git 远程仓库

```bash
cd /home/ubuntu/phonics_guide_website

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/phonics-guide-website.git

# 或使用 SSH（需要配置 SSH 密钥）
git remote add origin git@github.com:YOUR_USERNAME/phonics-guide-website.git

# 验证配置
git remote -v
```

### 步骤 3：推送代码到 GitHub

```bash
# 推送到主分支
git branch -M main
git push -u origin main

# 验证推送成功
git log --oneline origin/main
```

### 步骤 4：验证仓库

访问 `https://github.com/YOUR_USERNAME/phonics-guide-website` 验证代码已上传。

---

## 🚀 配置自动部署

### 方式一：使用 GitHub Pages（静态网站）

#### 步骤 1：启用 GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. **Source** 选择 **Deploy from a branch**
3. **Branch** 选择 **main**，文件夹选择 **dist**
4. 点击 **Save**

#### 步骤 2：创建构建工作流

创建 `.github/workflows/deploy.yml`：

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [22.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'pnpm'
    
    - name: Install pnpm
      run: npm install -g pnpm
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Build
      run: pnpm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

#### 步骤 3：提交工作流

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

#### 步骤 4：验证部署

1. 进入仓库 **Actions** 标签
2. 查看工作流执行状态
3. 部署完成后，访问 `https://YOUR_USERNAME.github.io/phonics-guide-website`

---

### 方式二：使用 Vercel（推荐）

Vercel 提供更好的性能和自动部署。

#### 步骤 1：连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账户登录
3. 点击 **Import Project**
4. 选择 `phonics-guide-website` 仓库

#### 步骤 2：配置部署

1. **Framework**: 选择 **Other**（因为是自定义 Express 应用）
2. **Root Directory**: 保持默认
3. **Build Command**: `pnpm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `pnpm install`

#### 步骤 3：部署

1. 点击 **Deploy**
2. 等待部署完成
3. 获得自动生成的 URL

#### 步骤 4：自定义域名（可选）

1. 在 Vercel 项目设置中找到 **Domains**
2. 添加你的自定义域名
3. 按照说明配置 DNS

---

### 方式三：使用 Railway（推荐）

Railway 支持完整的 Node.js 应用部署。

#### 步骤 1：连接 Railway

1. 访问 [railway.app](https://railway.app)
2. 使用 GitHub 账户登录
3. 点击 **New Project** → **Deploy from GitHub repo**
4. 授权 Railway 访问 GitHub
5. 选择 `phonics-guide-website` 仓库

#### 步骤 2：配置环境

1. **Start Command**: `node dist/index.js`
2. **Build Command**: `pnpm install && pnpm run build`
3. 添加环境变量（如需要）

#### 步骤 3：部署

1. Railway 自动开始部署
2. 查看部署日志
3. 获得自动生成的 URL

---

### 方式四：使用 Render

#### 步骤 1：连接 Render

1. 访问 [render.com](https://render.com)
2. 使用 GitHub 账户登录
3. 点击 **New +** → **Web Service**
4. 连接 GitHub 仓库

#### 步骤 2：配置

1. **Name**: `phonics-guide-website`
2. **Environment**: `Node`
3. **Build Command**: `pnpm install && pnpm run build`
4. **Start Command**: `node dist/index.js`

#### 步骤 3：部署

1. 点击 **Create Web Service**
2. Render 自动部署
3. 获得公开 URL

---

## 📊 部署平台对比

| 平台 | 类型 | 免费额度 | 自动部署 | 自定义域名 | 推荐指数 |
|------|------|--------|--------|----------|--------|
| GitHub Pages | 静态 | ✅ 无限 | ✅ | ✅ | ⭐⭐⭐ |
| Vercel | 全栈 | ✅ 100GB/月 | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Railway | 全栈 | ✅ $5/月 | ✅ | ✅ | ⭐⭐⭐⭐ |
| Render | 全栈 | ✅ 有限 | ✅ | ✅ | ⭐⭐⭐⭐ |
| Heroku | 全栈 | ❌ 付费 | ✅ | ✅ | ⭐⭐⭐ |

---

## 🔄 持续集成和部署 (CI/CD)

### GitHub Actions 工作流

创建 `.github/workflows/ci.yml`：

```yaml
name: CI/CD

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '22'
        cache: 'pnpm'
    
    - name: Install pnpm
      run: npm install -g pnpm
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Type check
      run: pnpm run check
    
    - name: Build
      run: pnpm run build
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: dist
        path: dist/
```

---

## 🔐 安全建议

### 1. 保护敏感信息

**不要提交以下文件**：
- `.env` - 环境变量
- `.env.local` - 本地环境变量
- `*.key` - 密钥文件
- `node_modules/` - 依赖文件

**检查 `.gitignore`**：
```bash
cat .gitignore
```

### 2. 使用 GitHub Secrets

存储敏感信息：

1. 进入仓库 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 添加密钥（如 API 密钥、数据库 URL 等）
4. 在工作流中使用：`${{ secrets.YOUR_SECRET_NAME }}`

### 3. 分支保护

1. 进入 **Settings** → **Branches**
2. 添加分支保护规则
3. 要求 Pull Request 审查
4. 要求通过 CI 检查

---

## 📈 监控和维护

### 查看部署状态

1. 进入仓库 **Actions** 标签
2. 查看最近的工作流运行
3. 点击工作流查看详细日志

### 查看部署日志

**Vercel**：进入项目 → **Deployments** → 选择部署 → **Logs**

**Railway**：进入项目 → **Logs**

**Render**：进入服务 → **Logs**

### 监控应用性能

1. 检查部署平台的分析面板
2. 监控错误率和响应时间
3. 定期检查日志

---

## 🆘 常见问题

### Q: 推送失败，提示 "Permission denied"
**A**: 
```bash
# 使用 HTTPS 而不是 SSH
git remote set-url origin https://github.com/YOUR_USERNAME/phonics-guide-website.git

# 或生成 GitHub Personal Access Token
# 访问 github.com/settings/tokens 创建 token
```

### Q: 部署失败，提示 "Build failed"
**A**:
1. 检查构建日志
2. 确保所有依赖已安装
3. 检查 Node.js 版本兼容性
4. 验证构建命令正确

### Q: 网站无法访问
**A**:
1. 检查部署状态是否为 "Success"
2. 清除浏览器缓存
3. 检查自定义域名 DNS 配置
4. 查看部署平台的错误日志

### Q: 如何更新已部署的网站
**A**:
```bash
# 本地修改代码
# 提交更改
git add .
git commit -m "Update content"
git push origin main

# 部署平台会自动检测到更改并重新部署
```

---

## 🎯 推荐工作流

### 开发流程

```bash
# 1. 创建新分支
git checkout -b feature/new-feature

# 2. 进行开发
# ... 修改代码 ...

# 3. 提交更改
git add .
git commit -m "Add new feature"

# 4. 推送分支
git push origin feature/new-feature

# 5. 在 GitHub 创建 Pull Request
# 6. 审查和合并
# 7. 自动部署到生产环境
```

---

## 📚 有用的链接

- [GitHub 官方文档](https://docs.github.com)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Vercel 文档](https://vercel.com/docs)
- [Railway 文档](https://docs.railway.app)
- [Render 文档](https://render.com/docs)

---

## 🎉 完成！

现在你的项目已经在 GitHub 上，并配置了自动部署。每次推送代码时，部署平台会自动构建和部署你的应用。

**下一步**：
1. 分享仓库链接
2. 邀请协作者
3. 配置自定义域名
4. 监控应用性能

---

**版本**：1.0.0
**最后更新**：2026年5月13日

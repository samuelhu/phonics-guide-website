# 自然拼读（Phonics）全能指南 - 本地部署指南

## 📋 项目概述

这是一个完整的、教科书级别的自然拼读学习网站，包含：
- 11 个核心学习阶段
- 200+ 个单词示例
- 完整的音频发音功能（使用 Web Speech API）
- 详细的规则解释和学习建议
- 响应式设计，支持桌面和移动设备

## 🚀 快速开始

### 方式一：使用 Node.js 直接运行（推荐）

#### 前置要求
- Node.js 18+ 或 pnpm 10+
- npm 或 pnpm 包管理器

#### 步骤

1. **解压项目包**
```bash
unzip phonics-guide-website.zip
cd phonics_guide_website
```

2. **安装依赖**
```bash
pnpm install
# 或使用 npm
npm install
```

3. **开发模式运行**（用于测试和开发）
```bash
pnpm run dev
# 或使用 npm
npm run dev
```
然后在浏览器中打开 `http://localhost:5173`

4. **生产模式构建和运行**
```bash
# 构建
pnpm run build
# 或使用 npm
npm run build

# 运行生产服务器
pnpm run start
# 或使用 npm
npm run start
```
然后在浏览器中打开 `http://localhost:3000`

### 方式二：使用 Docker 部署（推荐用于生产）

#### 前置要求
- Docker 已安装

#### 步骤

1. **创建 Dockerfile**
在项目根目录创建 `Dockerfile` 文件：

```dockerfile
# 构建阶段
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

# 运行阶段
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

2. **构建 Docker 镜像**
```bash
docker build -t phonics-guide:latest .
```

3. **运行容器**
```bash
docker run -p 3000:3000 phonics-guide:latest
```

然后在浏览器中打开 `http://localhost:3000`

### 方式三：使用 Docker Compose（推荐用于完整部署）

1. **创建 docker-compose.yml**
```yaml
version: '3.8'

services:
  phonics-guide:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

2. **启动服务**
```bash
docker-compose up -d
```

3. **查看日志**
```bash
docker-compose logs -f phonics-guide
```

4. **停止服务**
```bash
docker-compose down
```

## 📦 项目结构

```
phonics_guide_website/
├── client/                    # 前端代码
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx      # 主页面（包含所有11个学习阶段）
│   │   ├── components/       # React 组件
│   │   ├── App.tsx           # 应用主入口
│   │   ├── main.tsx          # React 入口
│   │   └── index.css         # 全局样式
│   ├── index.html            # HTML 模板
│   └── public/               # 静态资源
├── server/                   # 后端代码
│   └── index.ts              # Express 服务器
├── dist/                     # 构建输出目录
│   ├── index.js              # 编译后的服务器
│   └── public/               # 编译后的前端资源
├── package.json              # 项目配置
├── vite.config.ts            # Vite 配置
├── tsconfig.json             # TypeScript 配置
└── DEPLOYMENT_GUIDE.md       # 本部署指南
```

## 🔧 配置说明

### 环境变量

创建 `.env` 文件（可选）：
```env
NODE_ENV=production
PORT=3000
```

### 自定义端口

修改 `server/index.ts` 中的端口号：
```typescript
const port = process.env.PORT || 3000;  // 改为你需要的端口
```

## 🌐 访问和使用

### 本地访问
- 开发模式：`http://localhost:5173`
- 生产模式：`http://localhost:3000`

### 网络访问
如果需要从其他机器访问，使用你的服务器 IP：
- `http://<your-server-ip>:3000`

### 功能说明
1. **展开学习阶段** - 点击任何阶段卡片展开详细内容
2. **听发音** - 点击单词旁的🔊按钮听发音
3. **阅读解释** - 每个阶段都有详细的规则解释和学习技巧
4. **响应式设计** - 自动适配各种屏幕尺寸

## 📱 浏览器兼容性

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**注意**：音频发音功能需要浏览器支持 Web Speech API，大多数现代浏览器都支持。

## 🔍 故障排除

### 问题：端口已被占用
**解决方案**：
```bash
# 修改 PORT 环境变量
PORT=8000 pnpm run start

# 或修改 server/index.ts 中的端口号
```

### 问题：依赖安装失败
**解决方案**：
```bash
# 清除缓存并重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 问题：音频不工作
**解决方案**：
- 检查浏览器是否支持 Web Speech API
- 检查浏览器音量设置
- 尝试使用不同的浏览器

### 问题：页面加载缓慢
**解决方案**：
- 检查网络连接
- 清除浏览器缓存
- 尝试使用生产构建而不是开发模式

## 📊 性能优化

### 前端优化
- 使用 Vite 进行快速开发和构建
- React 18 的自动批处理
- CSS 模块化和 Tailwind CSS

### 后端优化
- Express 服务器轻量级
- 静态文件缓存
- 生产模式优化

## 🔐 安全建议

1. **生产部署**
   - 使用 HTTPS（通过 Nginx 或 Caddy 反向代理）
   - 设置适当的 CORS 策略
   - 定期更新依赖

2. **备份**
   - 定期备份项目文件
   - 使用版本控制（Git）

3. **监控**
   - 监控服务器资源使用
   - 记录访问日志

## 📈 扩展功能

### 添加数据库
项目可以升级为完整栈应用，添加：
- 用户认证
- 学习进度追踪
- 练习记录

### 添加 API
可以创建 API 端点来：
- 获取学习数据
- 保存用户进度
- 提供练习题

## 📞 支持和反馈

如有问题或建议，请：
1. 检查本指南的故障排除部分
2. 查看项目日志
3. 检查浏览器控制台（F12）

## 📄 许可证

本项目用于教育和学习目的。

## 🎯 下一步

1. **本地部署** - 按照上述步骤部署到你的服务器
2. **自定义** - 修改颜色、字体、内容等
3. **扩展** - 添加更多功能或内容
4. **分享** - 与其他学习者分享

---

**最后更新**：2026年5月13日
**版本**：1.0.0

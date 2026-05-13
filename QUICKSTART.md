# 快速开始指南

## ⚡ 30秒快速启动

### 方式一：Node.js 直接运行（最简单）

```bash
# 1. 安装依赖
pnpm install

# 2. 启动应用
pnpm run start

# 3. 打开浏览器访问
# http://localhost:3000
```

### 方式二：Docker 一键启动（推荐）

```bash
# 1. 构建镜像
docker build -t phonics-guide .

# 2. 运行容器
docker run -p 3000:3000 phonics-guide

# 3. 打开浏览器访问
# http://localhost:3000
```

### 方式三：Docker Compose（最推荐）

```bash
# 1. 启动服务
docker-compose up -d

# 2. 打开浏览器访问
# http://localhost:3000

# 3. 查看日志
docker-compose logs -f

# 4. 停止服务
docker-compose down
```

## 📋 前置要求

- **Node.js 方式**：需要 Node.js 18+ 和 pnpm
- **Docker 方式**：需要 Docker 和 Docker Compose

## 🎯 验证部署成功

访问 `http://localhost:3000` 后，你应该看到：
- ✅ 蓝色和红色的 Phonics 全能指南标题
- ✅ 11 个学习阶段卡片
- ✅ 可点击的音频按钮（🔊）
- ✅ 详细的规则解释

## 🔧 常见问题

| 问题 | 解决方案 |
|------|--------|
| 端口 3000 被占用 | `PORT=8000 pnpm run start` |
| 依赖安装失败 | `rm -rf node_modules && pnpm install` |
| Docker 构建失败 | `docker build --no-cache -t phonics-guide .` |
| 页面加载缓慢 | 清除浏览器缓存或尝试 Ctrl+Shift+R |

## 📚 详细文档

完整的部署指南请查看 `DEPLOYMENT_GUIDE.md`

## 🚀 生产部署建议

1. **使用反向代理**（Nginx/Caddy）
   - 启用 HTTPS
   - 配置缓存
   - 负载均衡

2. **监控和日志**
   - 使用 PM2 管理进程
   - 配置日志收集
   - 监控性能指标

3. **备份和恢复**
   - 定期备份数据
   - 使用版本控制
   - 制定灾难恢复计划

## 💡 下一步

- 修改内容和样式
- 添加自定义功能
- 部署到云服务器
- 与他人分享

---

**需要帮助？** 查看 `DEPLOYMENT_GUIDE.md` 的故障排除部分

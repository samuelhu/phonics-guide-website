# 构建阶段
FROM node:22-alpine AS builder
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 复制项目文件
COPY . .

# 构建应用
RUN pnpm run build

# 运行阶段
FROM node:22-alpine
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制构建结果
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# 仅安装生产依赖
RUN pnpm install --prod

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "dist/index.js"]

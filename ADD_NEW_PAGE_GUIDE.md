# 如何添加新页面到网站

本指南将教您如何添加新页面到自然拼读网站，并部署到 GitHub Pages。

## 📋 步骤概览

1. 创建新页面组件
2. 更新路由配置
3. 添加导航链接
4. 本地测试
5. 提交并部署

---

## 🔧 详细步骤

### 步骤 1：创建新页面组件

在 `client/src/pages/` 目录下创建新文件。

**文件名**：`YourNewPage.tsx`

**基本模板**：

```tsx
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function YourNewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            新页面标题
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            欢迎来到新页面
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            在这里添加你的内容...
          </p>
        </div>
      </section>
    </div>
  );
}
```

### 步骤 2：更新路由配置

编辑 `client/src/App.tsx`：

```tsx
// 1. 在顶部添加导入
import YourNewPage from "./pages/YourNewPage";

// 2. 在 Router 函数中添加路由
function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/your-new-page"} component={YourNewPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

### 步骤 3：添加导航链接

在 `client/src/pages/Home.tsx` 中添加链接到新页面：

```tsx
import { Link } from "wouter";

// 在合适的位置添加
<Link href="/your-new-page">
  <Button size="lg" className="px-8 py-3">
    访问新页面
  </Button>
</Link>
```

### 步骤 4：本地测试

```bash
# 启动开发服务器
pnpm run dev

# 打开浏览器访问
# http://localhost:5173/your-new-page
```

### 步骤 5：提交并部署

```bash
# 添加更改
git add .

# 提交更改
git commit -m "Add new page: Your New Page"

# 推送到 GitHub
git push origin main

# GitHub Pages 自动部署
# 等待 2-5 分钟后访问
# https://samuelhu.github.io/phonics-guide-website/your-new-page
```

---

## 📝 实例：添加"练习"页面

我已经为您创建了一个完整的"练习"页面示例。

### 文件结构

```
client/src/pages/
├── Home.tsx          # 首页
├── Practice.tsx      # 新增：练习页面
└── NotFound.tsx      # 404 页面
```

### 新增路由

```
/              → 首页
/practice      → 练习页面
```

### 功能特性

✅ 听力练习 - 点击按钮听发音，选择正确答案
✅ 拼写练习 - 根据发音选择正确的拼写
✅ 进度追踪 - 显示当前进度和得分
✅ 详细解释 - 每题都有规则解释
✅ 结果统计 - 完成后显示总分和正确率

---

## 🎨 页面组件最佳实践

### 1. 保持一致的设计

使用相同的颜色方案和布局：

```tsx
// 使用相同的渐变背景
<div className="bg-gradient-to-b from-blue-50 via-white to-blue-50">

// 使用相同的蓝红渐变
className="bg-gradient-to-r from-blue-600 to-red-600"
```

### 2. 添加返回首页按钮

```tsx
<Link href="/">
  <Button variant="ghost" size="sm">
    <ArrowLeft className="w-4 h-4 mr-2" />
    返回首页
  </Button>
</Link>
```

### 3. 使用响应式设计

```tsx
// 移动优先
<div className="px-4 md:px-8 lg:px-12">
  <div className="max-w-4xl mx-auto">
    {/* 内容 */}
  </div>
</div>
```

### 4. 使用 shadcn/ui 组件

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
// ... 更多组件
```

---

## 🔄 完整工作流示例

### 创建"词汇表"页面

#### 1. 创建页面文件

`client/src/pages/Vocabulary.tsx`：

```tsx
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2 } from "lucide-react";
import { Link } from "wouter";

export default function Vocabulary() {
  const speak = (word: string) => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    }
  };

  const words = [
    { word: "cat", phonetic: "/kæt/", meaning: "猫" },
    { word: "dog", phonetic: "/dɔɡ/", meaning: "狗" },
    { word: "tree", phonetic: "/tri:/", meaning: "树" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            词汇表
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {words.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.word}</h3>
                    <p className="text-gray-600">{item.phonetic}</p>
                    <p className="text-blue-600">{item.meaning}</p>
                  </div>
                  <button
                    onClick={() => speak(item.word)}
                    className="bg-blue-100 text-blue-900 p-3 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Volume2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

#### 2. 更新 App.tsx

```tsx
import Vocabulary from "./pages/Vocabulary";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/practice"} component={Practice} />
      <Route path={"/vocabulary"} component={Vocabulary} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

#### 3. 在首页添加链接

在 `Home.tsx` 中添加：

```tsx
<Link href="/vocabulary">
  <Button size="lg" className="px-8 py-3">
    查看词汇表
  </Button>
</Link>
```

#### 4. 部署

```bash
git add .
git commit -m "Add vocabulary page"
git push origin main
```

---

## 📊 可用的 UI 组件

项目已包含 shadcn/ui 的所有组件：

- **Button** - 按钮
- **Card** - 卡片
- **Dialog** - 对话框
- **Tabs** - 标签页
- **Accordion** - 手风琴
- **Select** - 下拉选择
- **Input** - 输入框
- **Textarea** - 文本区域
- **Badge** - 标签
- **Progress** - 进度条
- **Tooltip** - 提示
- **Alert** - 警告

查看 `client/src/components/ui/` 目录了解所有可用组件。

---

## 🎯 常见页面类型

### 1. 信息展示页面

```tsx
export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1>标题</h1>
      <p>内容</p>
    </div>
  );
}
```

### 2. 交互式页面

```tsx
export default function InteractivePage() {
  const [state, setState] = useState(0);
  
  return (
    <div>
      <button onClick={() => setState(state + 1)}>
        点击：{state}
      </button>
    </div>
  );
}
```

### 3. 列表页面

```tsx
export default function ListPage() {
  const items = [/* ... */];
  
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

---

## ✅ 检查清单

添加新页面时，确保：

- [ ] 创建了新的 `.tsx` 文件
- [ ] 在 `App.tsx` 中导入了新页面
- [ ] 在 `Router` 中添加了新路由
- [ ] 添加了返回首页的链接
- [ ] 在首页添加了导航链接
- [ ] 本地测试成功
- [ ] 提交了代码
- [ ] 推送到 GitHub
- [ ] 验证部署成功

---

## 🚀 快速命令

```bash
# 启动开发服务器
pnpm run dev

# 构建项目
pnpm run build

# 类型检查
pnpm run check

# 提交并部署
git add .
git commit -m "Add new page"
git push origin main
```

---

## 📚 更多资源

- [React 文档](https://react.dev)
- [TypeScript 文档](https://www.typescriptlang.org)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [shadcn/ui 文档](https://ui.shadcn.com)
- [Wouter 路由文档](https://github.com/molefrog/wouter)

---

## 🎉 完成！

现在你已经学会了如何添加新页面。继续创建更多功能丰富的页面吧！

**示例页面已创建**：
- ✅ `/practice` - 练习页面
- 📝 `/vocabulary` - 词汇表（示例代码）

**下一步**：
1. 创建更多页面
2. 添加数据库支持
3. 实现用户认证
4. 添加更多交互功能

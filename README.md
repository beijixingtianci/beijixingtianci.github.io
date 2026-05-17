# 个人网站介绍

个人网站。基于 Vue 3 + Vite 构建，部署在 GitHub Pages。

## 在线访问

[https://beijixingtianci.github.io](https://beijixingtianci.github.io)

## 页面结构

- `/` – 首页（个人简介 + 导航按钮）
- `/union` – 建国大学中国留学生学生会官网（独立子站）
- `/projects` – 我的项目列表（卡片式展示）
- 联系作者 – 微信二维码弹窗（导航栏）

## 技术栈

- **Vue 3** (Options API)
- **Vite** – 构建工具
- **Vue Router** (Hash 模式，适配 GitHub Pages)
- **Font Awesome** – 图标库
- 纯 CSS 样式（无 UI 框架）

## 本地运行

```bash
# 克隆项目（如果需要）
git clone https://github.com/beijixingtianci/beijixingtianci.github.io.git

# 安装依赖（本仓库仅包含打包后的 dist 内容，如需源码请联系我）
```

## 项目架构

```
Vue 前端 (GitHub Pages)
    ↓ 调用 API
Render 后端 (Node.js + Express)
    ↓ 连接数据库
Supabase PostgreSQL
```

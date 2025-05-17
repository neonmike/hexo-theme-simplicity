![image-20250517142803822](C:/Users/robin/AppData/Roaming/Typora/typora-user-images/image-20250517142803822.png)

# Simplicity

一个简约风格的个人博客Hexo主题，专为喜欢简洁设计的博主打造。

## 特点

- 简约风格设计
- 响应式布局，适配各种设备
- 首页横幅展示
- 标签云功能
- 分类目录
- 集成评论系统
- 搜索功能
- 社交媒体链接
- 文章目录导航
- 代码高亮支持

## 安装

### 方法一：下载主题

1. 下载本主题
2. 将下载的文件解压到Hexo博客的`themes`目录下
3. 将文件夹重命名为`simplicity`

### 方法二：Git克隆

在Hexo博客根目录下执行以下命令：

```bash
git clone https://github.com/yourusername/hexo-theme-simplicity.git themes/simplicity
```

## 启用主题

修改Hexo博客根目录下的`_config.yml`文件，将`theme`设置为`simplicity`：

```yaml
theme: simplicity
```

## 配置

主题的配置文件位于`themes/simplicity/_config.yml`，您可以根据需要修改以下配置：

### 导航菜单

```yaml
menu:
  首页: /
  归档: /archives
  分类: /categories
  标签: /tags
  关于: /about
```

### 侧边栏

```yaml
sidebar:
  position: right # 侧边栏位置：left 或 right
  widgets:
    - profile
    - category
    - tag
    - recent_posts
    - archive
    - search
```

### 社交媒体链接

```yaml
social:
  github: https://github.com/yourusername
  twitter: https://twitter.com/yourusername
  facebook: https://facebook.com/yourusername
  instagram: https://instagram.com/yourusername
  weibo: https://weibo.com/yourusername
  zhihu: https://zhihu.com/people/yourusername
  email: your.email@example.com
```

### 首页横幅

```yaml
index:
  banner_img: /img/banner.jpg # 首页横幅图片
  banner_title: 欢迎来到我的博客 # 横幅标题
  banner_desc: 分享我的想法和经验 # 横幅描述
```

### 评论系统

```yaml
comments:
  enable: true # 是否启用评论
  type: disqus # 评论系统类型：disqus, valine, gitalk 等
  disqus_shortname: your-disqus-shortname # Disqus短名称
```

## 插件依赖

为了使主题的所有功能正常工作，请确保安装以下Hexo插件：

```bash
npm install --save hexo-generator-archive hexo-generator-category hexo-generator-index hexo-generator-tag hexo-generator-search
```

## 创建页面

### 分类页面

```bash
hexo new page categories
```

然后编辑`source/categories/index.md`：

```markdown
---
title: 分类
date: 2025-05-17 10:00:00
type: "categories"
layout: "categories"
---
```

### 标签页面

```bash
hexo new page tags
```

然后编辑`source/tags/index.md`：

```markdown
---
title: 标签
date: 2025-05-17 10:00:00
type: "tags"
layout: "tags"
---
```

### 关于页面

```bash
hexo new page about
```

然后编辑`source/about/index.md`添加您的个人介绍。

## 许可证

本主题采用[MIT许可证](LICENSE)。

---------------------------------------------------------------------------------------------------

1. 

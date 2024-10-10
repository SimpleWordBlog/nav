# GitHub Pages 项目上传步骤

1. 在 GitHub 上创建一个名为 `SimpleWordBlog.github.io` 的新仓库

2. 打开终端，进入您的项目目录

3. 运行以下命令：

```bash
# 初始化一个新的 Git 仓库
git init

# 将所有文件添加到 Git
git add .

# 提交更改
git commit -m "初始提交"

# 添加 GitHub 仓库作为远程仓库
git remote add origin https://github.com/SimpleWordBlog/SimpleWordBlog.github.io.git

# 将代码推送到 GitHub
git push -u origin main
```

4. 推送完成后，GitHub 将自动构建并部署您的网站。

5. 您的网站将在 https://SimpleWordBlog.github.io 上可用

注意：确保您的仓库是公开的，以便 GitHub Pages 正常工作。
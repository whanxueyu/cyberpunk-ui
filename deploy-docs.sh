#!/bin/bash
set -e

echo "=== 1. 构建文档 ==="
cd docs
npm run build

echo ""
echo "=== 2. 部署到 GitHub Pages ==="
cd .vitepress/dist

git init
git checkout -b gh-pages
git add -A
git commit -m "deploy: $(date +%Y-%m-%d_%H:%M:%S)"

git push -f https://github.com/whanxueyu/cyberpunk-ui.git gh-pages

echo ""
echo "=== 部署完成 ==="
echo "访问地址: https://whanxueyu.github.io/cyberpunk-ui"

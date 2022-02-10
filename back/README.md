## 介绍
- TS是JS的扩展(超集)
- TS是不能直接在浏览器中运行 需要编译成JS
- 可以在开发时提供丰富的语法提示

## 环境搭建
- `npm i typescript -g`
- 如果已经安装过就会报错，也可以加 `--force` 强制覆盖
- 使用 `tsc --init` 生成ts的配置文件

## 编译调试
- 直接使用 `tsc` 命令会将当前目录所有的ts文件都编译成js文件
- 使用 `tsc --watch` 可以实时编译
- 如果希望直接在vscode中运行ts 需要安装 `Code Runner` 插件 然后还执行 `npm install ts-node -g` 全局安装ts-node即可
- 一般使用ts插件或babel来解析ts

## 使用rollup处理ts
- 执行命令 `npm install rollup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-serve -D`

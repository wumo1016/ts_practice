## 环境搭建
- `npm i typescript -g`
- `tsc --init` 生产ts配置文件

## 优势
- 编译时类型检测
- 自动提示
- 引入泛型

## tsconfig常见配置
- compilerOptions
  - target: 编译后的js版本(比如class语法)('ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNEXT')
  - module: 编译后的模块类型 ('none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', 'ESNext')
  - rootDir: 需要的编译的文件目录
  - outDir: 编译后的js文件存放的目录(直接执行tsc时会自动将目标文件编译后放在这下面)
  - lib: 采用的库版本 默认是es5 这个是如果使用Set等结构就会报错 所以需要将其设置为`["DOM", "ES2016"]`或更高
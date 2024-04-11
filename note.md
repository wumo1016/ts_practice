## 环境搭建

- `npm i typescript -g`
- `npm i ts-node -g` 可直接运行 ts 文件
- `tsc --init` 生产 ts 配置文件
- 使用 paecel 打包 `cnpm i parcle-bundler -S`

## 优势

- 编译时类型检测
- 自动提示
- 引入泛型

## tsconfig 常见配置

- compilerOptions

  - target: 编译后的 js 版本, 默认会引入对应 ts 得类型声明文件, 可以在 lib 中定义所需得声明文件(比如 class 语法)('ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNEXT')
  - lib: 采用的库版本 默认是 es5 这个是如果使用 Set 等结构就会报错 所以需要将其设置为`["DOM", "ES2016"]`或更高
  - jsx: 区分 jsx 是否需要转换
    - preserve: 不转换 tsx
    - react: tsx 文件中需要手动引入 React
    - react-jsx: tsx 文件中无需手动引入 React
  - experimentalDecorators: 启用 ES7 装饰器
  - emitDecoratorMetadata: 启用装饰器元数据
  - jsxFactory: 创建虚拟 dom 的方法, 是 React.createElement 还是 h 方法
  - jsxFragmentFactory: 创建文档碎片采用的是 React.Fragment 还是 Fragment
  - jsxImportSource: 自动导入时解析的路径名
  - useDefineForClassFields: 采用 Object.defineProperty 类中的属性和方法
  - moduleDetection: 是否强制将 ts 文件识别为模块
  - module: 编译后的模块类型 ('none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', 'ESNext')
  - rootDir: 需要的编译的文件目录
  - outDir: 编译后的 js 文件存放的目录(直接执行 tsc 时会自动将目标文件编译后放在这下面)
  - strict: 开始严格模式(相当于开启所有检查)(一般开启下面两个就够用)
  - noImplicitAny: 一般当表达式或函数参数上有隐含的 any 类型时将报错
  - strictNullChecks: 开启后 undefined 或 null 只能赋值给 `自己/any/unknow` 类型
  - declaration: 指定文件编译后生成详情的`.d.ts`文件
  - removeComments: 编译后删除所有注释
  - baseUrl: 基础路径
  - paths: 一个对象 key 是引用时的别名 值对应加上 baseUrl 的绝对路径
    ```json
    {
      "baseUrl": "src",
      "paths": {
        "@/home/*": ["home/*"]
      }
    }
    ```
  - esModuleInterop: 一些依赖为了兼容 commonjs 规范和 amd 等 所以使用 exports=这个格式 将二者统一 开启这个选项 表示允许出现这种导出格式
  - allowJs: 是否允许在 ts 中引入 js 文件

- include: 编译哪些文件
- exclude: 排除指定的目录或文件不编译

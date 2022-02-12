## 环境搭建
- `npm i typescript -g`
- `npm i ts-node -g` 可直接运行ts文件
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
  - strict: 开始严格模式(相当于开启所有检查)(一般开启下面两个就够用)
  - noImplicitAny: 一般当表达式或函数参数上有隐含的any类型时将报错
  - strictNullChecks: 开启后 undefined或null只能赋值给 `自己/any/unknow` 类型
  - experimentalDecorators: 启用ES7装饰器
  - emitDecoratorMetadata: 启用装饰器元数据
  - declaration: 指定文件编译后生成详情的`.d.ts`文件
  - removeComments: 编译后删除所有注释
  - baseUrl: 基础路径
  - paths: 一个对象 key是引用时的别名 值对应加上baseUrl的绝对路径
    ```json
    {
      "baseUrl": "src",
      "paths": {
        "@/home/*": ["home/*"]
      }
    }
    ```
  - esModuleInterop: 一些依赖为了兼容commonjs规范和amd等 所以使用exports=这个格式 将二者统一 开启这个选项 表示允许出现这种导出格式
- include: 编译哪些文件
- exclude: 排除指定的目录或文件不编译

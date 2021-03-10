// 冒号后面的都是类型

// 简单类型
const str: string = ''
const num: number = 1
const boolean: boolean = true
const n: null = null
const u: undefined = undefined
const array: any[] = []
const create = (obj: object) => { }

// 数组
const arr: number[] = [1, 2, 3]

// 元组 值必须与定义的类型一一对应
const tuple: [string, number] = ['12', 123]

// 字符串字面量类型
type test3 = 'up' | 'down'
let data1: test3 = 'up'

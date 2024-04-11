/* ----------- 装包拆包 --------------- */
type Proxy<T> = {
  get(): T
  set(value: any): void
}

type Proxify<T> = {
  [K in keyof T]: Proxy<T[K]>
}

function proxify<T extends object>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>
  for (const key in obj) {
    let value = obj[key]
    result[key] = {
      get() {
        return value
      },
      set(newValue) {
        value = newValue
      }
    }
  }
  return result
}

let data = {
  name: 'wyb',
  age: 12
}
let proxyDatas = proxify(data)

console.log(proxyDatas.name.get())
proxyDatas.name.set('xxx')
console.log(proxyDatas.name.get())

function unProxyfy<T extends object>(obj: Proxify<T>): T {
  let result = {} as T
  for (const key in obj) {
    let value = obj[key]
    result[key] = value.get()
  }
  return result
}
let data2 = unProxyfy(proxyDatas)
console.log(data2.name)

/* ---------------- 交集 ------------------------ */
;(function () {
  type A = {
    name: string
    age: number
    address: number
  }
  type B = {
    name: number
    male: boolean
    address: boolean
  }
  type Inter<T extends object, K extends object> = Pick<
    K,
    Extract<keyof T, keyof K>
  >
  type MyInter = Inter<A, B>
})

/* ---------------- 差集&补集 --------------------- */
;(function () {
  type A = {
    name: string
    age: number
    address: number
  }
  type B = {
    name: number
    male: boolean
    address: boolean
  }
  type Diff<T extends object, K extends object> = Pick<
    T,
    Exclude<keyof T, keyof K>
  >
  // type Diff<T extends object, K extends object> = Omit<T, keyof K>

  // A比B少的叫差集
  type MyDiff = Diff<A, B>
  // B比A少的叫补集
  type MyObjectCom = Diff<B, A>
})

/* ---------------- 并集 重复的后面覆盖前面的 --------------------- */
type Person1 = {
  name: string
  age: number
}

type Person2 = {
  age: string
  address: string
  a: string
  b: number
}

// 方法1
type Merge<T extends object, K extends object> = Diff<T, K> &
  Diff<K, T> &
  Inter<T, K>
type MyMerge = Merge<Person1, Person2>
let merge: MyMerge = {
  name: 'abc',
  address: 'abc',
  a: '1',
  b: 0,
  age: 'abc'
}
// 方法2
type Merge1<T extends object, K extends object> = Omit<T, keyof K> & K
type MyMerge1 = Computed<Merge<Person1, Person2>>
let merge1: MyMerge1 = {
  name: 'abc',
  address: 'abc',
  a: '1',
  b: 0,
  age: 'abc'
}

/* ---------------------- 将指定类型所有属性变成可选(无限层) -------------------------  */

;(function () {
  type MyPartial<T> = {
    // 自定义无限层可选
    [K in keyof T]?: T[K] extends object ? MyPartial<T[K]> : T[K]
  }
  interface IObject {
    width: number
    height: number
  }
  interface IPerson {
    name: string
    age: number
    obj: IObject
  }
  type IIPerson = MyPartial<IPerson>
  // type IIPerson = Partial<IPerson>

  const test: IIPerson = {
    obj: {}
  }
})

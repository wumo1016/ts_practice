/* ------------------- 非空断言(后面加!) ------------------- */
const ele: HTMLElement | null = document.querySelector('#app')
// ele!.innerHTML = '123'

/* ----------------- type assertion 类型断言 -------------- */
function getLength(data: string | number): number {
  const str = data as string
  if (str.length) {
    return str.length
  } else {
    return str.toString().length
  }
}

/* 
1.子类继承父类 它们可以相互断言
2.两个类没有继承关系 一个类所有public的属性和方法 是另一个类所有public的属性和方法的子集 或完全相同 才可以相互断言
3.联合类型的一种
*/

/* --------------------- 链判断运算符? -------------------------- */
console.log(ele?.style)

/* --------------------- ?? ------------------------------- */
// 只有前面是null或undefined时 才返回后面的
console.log(false ?? '23')

export {}

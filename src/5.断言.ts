/* ------------------- 非空断言(后面加!) ------------------- */
const ele: HTMLElement | null = document.querySelector("#app")
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

/* --------------------- 链判断运算符? -------------------------- */
console.log(ele?.style);


/* --------------------- ?? ------------------------------- */
// 只有前面是null或undefined时 才返回后面的
console.log(false ?? '23');



export { }

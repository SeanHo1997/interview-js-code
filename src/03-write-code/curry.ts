/**
 * @description 柯里化curry
 * @author seanho
 */

export function curry (fn: Function) {
  const argsLength = fn.length // 参数的长度
  let args: any[] = []

  function calc(this: any, ...newArgs: any[]) {
    // 积累参数
    args = [...args, ...newArgs]
    if (args.length < argsLength) {
      // 参数不够返回函数
      return calc
    } else {
      return fn.apply(this, args.slice(0, argsLength))
    }
  }
}

function add (a:number, b:number, c:number): number {
  return a + b + c
}

const curryAdd = curry(add)
const res = curryAdd(10)(20)(30)
console.info(res)

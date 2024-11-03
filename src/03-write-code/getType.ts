/**
 * @description 获取数据类型
 * @author seanho
 */

/**
 * 获取数据类型
 * @param x x
 */

export function getType (x: any): string {
  const originType = Object.prototype.toString.call(x)
  const index = originType.indexOf(' ')
  const result = originType.slice(index + 1, - 1).toLocaleLowerCase()
  return result
}

// 功能测试
const num = 100
const str = 'str'
const arr = [1,2,3]
const udf = undefined
console.log(getType(num))
console.log(getType(str))
console.log(getType(arr))
console.log(getType(udf))

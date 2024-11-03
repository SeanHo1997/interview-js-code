/**
 * @description 千分位格式化
 * @author seanho
 */

export function thousandsFormat1(num: number): string {
  // 只考虑整数
  const intN = Math.floor(num)
  const arr = intN.toString().split('').reverse()
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        // 之所以prev拼接在后面因为输出要正序的数字，而此时已经通过reverse逆序排列
        return val + ',' + prev
      } else {
        return val
      }
    } else {
      return val + prev
    }
  })
}

export function thousandsFormat2(num: number): string {
  const intN = Math.floor(num)

  let res = ''
  const stringNum = intN.toString()
  const length = stringNum.length

  for (let i = length - 1; i >= 0; i--) {
    const j = length - i
    // 这里需加强理解
    if (j % 3 === 0) {
      if (i === 0) {
        res = stringNum[i] + res
      } else {
        res = ',' + stringNum[i] + res
      }
    } else {
      res = stringNum[i] + res
    }
  }

  return res
}

// 功能测试
// const num = 12345611
// console.log(thousandsFormat1(num))
// console.log(thousandsFormat2(num))

/**
 * @description 两数之和
 */

// 嵌套循环方式 TC: O(n^2)
export function findTwoNumbers(arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if(arr.length === 0) return res

  let flag = false
  for(let i = 0; i < length; i++) {
    const n1 = arr[i]
    for(let j = i + 1; j < length; j++) {
      const n2 = arr[j]
      if ((n1 + n2) === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }
  if (flag) return res
  }

  return res
}

// 双指针方式
function findTwoNumbers2 (arr: number[], n: number) {
  let res: number[] = []
  const length = arr.length
  if (length === 0) return res

  let i = 0
  let j = length - 1

  while(i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1 + n2
    if (sum > n) {
      j--
    } else if (sum < n) {
      i++
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }
  return res
}

// 功能测试
const array = [1,2,3,4,5]
const n = 9
console.info(findTwoNumbers(array, n))

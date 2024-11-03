
/**
 * 移动数组中所有值是0的元素到数组末尾（要求在原数组基础上修改） 时间复杂度O(n^2)
 * @param arr number arr
 * @returns
 */
function moveZero1(arr: number[]): void {
  const length = arr.length
  if (length === 0) return
  let zeroLength = 0
  for(let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i -- // 重新检查此时的i
      zeroLength ++ // zeroLength不需要判断
    }
  }
}

/**
 * 移动数组中所有值是0的元素到数组末尾 (双指针思路) 时间复杂度O(n)
 * @param arr number arr
 * @returns
 */
function moveZero2(arr: number[]): void {
  const length = arr.length

  // 定义两个指针
  let i
  let j = -1

  // 循环一次即可完成功能
  for(i = 0; i < length; i++) {
    if(arr[i] === 0) {
      // 找到第一个0且j还没赋值
      if(j < 0) {
        j = i
      }
    }

    if(arr[i] !== 0 && j >= 0) {
      // 如果循环到不是0的元素，则将此元素放到0的前面(此时arr[j] === 0)
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      // 交换完 j向前一步
      j++
    }
  }
}

// 功能测试
const moveZeroArr = [1,2,0,3,0,4,0,5]
console.time('1')
moveZero1(moveZeroArr)
console.timeEnd('1')
// console.log(moveZeroArr)

console.time('2')
// moveZero2(moveZeroArr)
console.timeEnd('2')
// console.log(moveZeroArr)

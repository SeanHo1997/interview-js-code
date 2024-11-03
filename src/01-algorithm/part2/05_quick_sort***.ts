
/**
 * 快速排序
 * @param {number[]} arr 传入数组
 * @returns {number[]} 排序后的数组
 * TC: O(nlogn)
 */
export function quickSort1 (arr: number[]): number[] {
  const length = arr.length
  if (length <= 1) return arr
  const midIndex = Math.floor(length / 2)
  const midValue = arr[midIndex]

  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < length; i++) { // O(n)
    if (i !== midIndex) {
      // 不对中间值做处理
      const n = arr[i]
      if (n > midValue) {
        right.push(n)
      } else {
        left.push(n)
      }
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right))
}

// 功能测试
const arr1 = []
for (let i = 0; i < 10; i++) {
  arr1.push(Math.floor(Math.random() * 1000))
}
console.time('quickSort1')
console.log(quickSort1(arr1))
console.timeEnd('quickSort1')
// 时间复杂度 O(n*logn)

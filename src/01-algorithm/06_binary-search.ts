/**
 * @description 二分查找(前提是数组的元素是有序且从小到大排列的)
 */

// 循环方式
export function binarySearch1(arr: number[], target: number): number {
  const length = arr.length
  if (length === 0) return -1

  let startIndex = 0 // 开始位置
  let endIndex = length - 1 // 结束位置

  while(startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]
    if (target < midValue) {
      endIndex = midIndex - 1
    } else if (target > midValue) {
      startIndex = midValue + 1
    } else {
      return midIndex
    }
  }

  return -1
}

// 递归方法
export function binarySearch2 (arr: number[], target: number, startIndex?: number,endIndex?: number): number {
  const length = arr.length
  if (length === 0) return -1

  if (startIndex === null) startIndex = 0
  if (endIndex === null) endIndex = length - 1

  // 两者相遇
  if (startIndex! > endIndex!) return -1

  const midIndex = Math.floor((startIndex! + endIndex!) / 2)
  const midValue = arr[midIndex]

  if(target < midValue) {
    return binarySearch2(arr, target, startIndex, midIndex - 1)
  } else if (target > midValue) {
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  } else {
    return midIndex
  }
}

// 功能测试
const t = 20
const arr1 = [10, 20, 30, 40, 50]
console.info(binarySearch2(arr1, t))


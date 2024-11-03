// 旋转数组

// 方法1
export function rotate1(arr: number[], k: number): number[] {
  if (!k || arr.length === 0) return arr
  const length = arr.length
  const step = Math.abs(k % length)

  // TC: O(n^2) SC: O(1)
  for (let i = 0; i < step; i++) {
    const item = arr.pop()
    if (item) {
      // 数组的unshift shift splice时间复杂度n(数组连续的数据结构导致)
      arr.unshift(item)
    }
  }
  return arr
}

// 功能测试
const arr = [1, 2, 3, 4]
const arr2 = rotate1(arr, 2)
console.log(arr2)

// 方法2
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length)

  // TC: O(1) SC: O(n)
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  const part3 = part1.concat(part2)
  return part3
}

/**
 * @description 二分查找
 */

import { binarySearch1, binarySearch2 } from "./06_binary-search"

describe('二分查找', () => {
  it('正常情况', () => {
    const arr = [10, 20, 30, 40, 50]
    const target = 40
    const index = binarySearch1(arr, target)
    expect(index).toBe(3)
  })

  it('空数组', () => {
    const res = binarySearch1([], 100)
    expect(res).toBe(-1)
  })

  it('找不到target', () => {
    const arr = [10, 20, 30, 40, 50]
    const target = 300
    const index= binarySearch1(arr, target)
    expect(index).toBe(-1)
  })
})


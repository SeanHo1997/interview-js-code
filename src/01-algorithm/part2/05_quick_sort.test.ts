/**
 * @description 快速排序
 *
 */

import { quickSort1 } from "./05_quick_sort***";

describe('快速排序测试', () => {
  it('正常情况', () => {
    const arr1 = [5,4,3,1,2]
    const res1 = quickSort1(arr1)
    expect(res1).toEqual([1,2,3,4,5])
  })
  it('非正常情况,空数组', () => {
    const arr2: number[] = []
    const res2 = quickSort1(arr2)
    expect(res2).toEqual([])
  })
  it('非正常情况,数组中元素值一样', () => {
    const arr3 = [5,5,5,5,5]
    const res3 = quickSort1(arr3)
    expect(res3).toEqual([5,5,5,5,5])
  })
  it('非正常情况,有负数', () => {
    const arr4 = [3,-2,-1,-5]
    const res4 = quickSort1(arr4)
    expect(res4).toEqual([-5,-2,-1,3])
  })
})

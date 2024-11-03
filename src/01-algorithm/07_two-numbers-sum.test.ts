import { findTwoNumbers } from "./07_two-numbers-sum";

describe('查找数组中某两项的和为给定的数', () => {
  it('正常情况', () => {
    const arr = [1,2,3]
    const sum = 3
    const res = findTwoNumbers(arr, sum)
    expect(res).toEqual([1,2])
  })

  it('找不到的情况', () => {
    const arr2 = [1,2,3]
    const sum2 = 100
    const res2 = findTwoNumbers(arr2, sum2)
    expect(res2).toEqual([])
  })

  it('空数组', () => {
    const arr3: number[] = []
    const sum3 = 1
    const res3 = findTwoNumbers(arr3, sum3)
    expect(res3).toEqual([])
  })
})

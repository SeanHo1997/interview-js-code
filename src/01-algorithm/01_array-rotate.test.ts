/**
 * @description Array rotate test
 * @author 双越老师
 */

import { rotate1, rotate2 } from "./01_array-rotate";

describe('数组旋转', () => {
  // 每一个it都是一个测试例
  it('正常情况', () => {
    const arr = [1,2,3,4,5]
    const k = 3
    const res = rotate1(arr, k)
    expect(res).toEqual([3,4,5,1,2]) // 断言
  })

  it('k是负数', () => {
    const arr = [1,2,3,4,5]
    const k = -1
    const res = rotate1(arr, -1)
    expect(res).toEqual([5,1,2,3,4])
  })

  
})

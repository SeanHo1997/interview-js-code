/**
 * @description 移动数组中所有值为0的元素到数组末尾
 * @author seanho
 */

import { moveZero1 } from './03_move-zero***'

describe('移动0到数组末尾', () => {
  it('正常情况', () => {
    const arr = [1,2,3,0,4,0,5]
    moveZero1(arr)
    expect(arr).toEqual([1,2,3,4,5,0,0])
  })

  it('非正常情况,没有0', () => {
    const arr2 = [1,2,3,4,5]
    moveZero1(arr2)
    expect(arr2).toEqual([1,2,3,4,5])
  })

  it('非正常情况,全是0', () => {
    const arr3 = [0,0,0,0,0]
    moveZero1(arr3)
    expect(arr3).toEqual([0,0,0,0,0])
  })
})

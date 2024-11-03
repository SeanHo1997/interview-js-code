/**
 * @description 数据扁平化
 * @author seanho
 */

import { flattenArray } from './array-flatten'

describe('数组扁平化', () => {
  it('空数组', () => {
    const res = flattenArray([])
    expect(res).toEqual([])
  })
  it('一级数组', () => {
    const res = flattenArray([1,2,3])
    expect(res).toEqual([1,2,3])
  })

  it('二级数组', () => {
    const res = flattenArray([1,2,[3,4,5]])
    expect(res).toEqual([1,2,3,4,5])
  })
})

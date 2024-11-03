/**
 * @description 数组绝对扁平化
 * @author seanho
 */

import { flattenArrayDeep } from "./array-flatten-deep";

describe('数组绝对扁平化', () => {
  it('空数组', () => {
    const res = flattenArrayDeep([])
    expect(res).toEqual([])
  })
  it('一级数组', () => {
    const res = flattenArrayDeep([1,2])
    expect(res).toEqual([1,2])
  })
  it('二级数组', () => {
    const res = flattenArrayDeep([1,2,[3,4]])
    expect(res).toEqual([1,2,3,4])
  })
  it('三级数组', () => {
    const res = flattenArrayDeep([1,2,[3,4,[5,6]]])
    expect(res).toEqual([1,2,3,4,5,6])
  })
})

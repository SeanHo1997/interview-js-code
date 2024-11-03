/**
 * @description 获取数据类型
 * @author seanho
 */

import { getType } from "./getType"

describe('获取数据类型', () => {
  it('null', () => {
    expect(getType(null)).toBe('null')
  })

  it('undefined', () => {
    expect(getType(undefined)).toBe('undefined')
  })

  it('object', () => {
    expect(getType({a: 100})).toBe('object')
  })

  it('array', () => {
    expect(getType([1,2,3])).toBe('array')
  })
})

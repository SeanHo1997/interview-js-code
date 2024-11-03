/**
 * @description bind test
 */

import './bind'

describe('自定义bind函数', () => {
  it('绑定this', () => {
    function fn(this: any) {
      return this
    }
    const fn1 = fn.bind({x: 1})
    expect(fn1()).toEqual({ x: 1 })
  })

  it('绑定参数', () => {
    function fn(a: number, b: number, c: number) {
      return a + b + c
    }
    const fn1 = fn.bind(null, 10, 20)
    expect(fn1(30)).toBe(60)
  })
})

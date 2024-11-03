
import { thousandsFormat1, thousandsFormat2 } from './07_thousands-format***'

describe('数字转换千分位字符串', () => {
  it('正常情况函数1', () => {
    const num = 12345678
    const res = thousandsFormat1(num)
    expect(res).toBe('12,345,678')
  })

  it('正常情况函数2', () => {
    const num = 12345678
    const res = thousandsFormat2(num)
    expect(res).toBe('12,345,678')
  })

  it('非正常情况: 小于1000(函数1)', () => {
    const num = 123
    const res = thousandsFormat1(num)
    expect(res).toBe('123')
  })

  it('非正常情况: 小于1000(函数2)', () => {
    const num = 123
    const res = thousandsFormat2(num)
    expect(res).toBe('123')
  })

  it('非正常情况: 小数(函数1)', () => {
    const num = 12345.12
    const res = thousandsFormat1(num)
    expect(res).toBe('12,345')
  })

  it('非正常情况: 小数(函数2)', () => {
    const num = 12345.12
    const res = thousandsFormat2(num)
    expect(res).toBe('12,345')
  })

})


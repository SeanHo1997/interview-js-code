import { switchLetterCase1, switchLetterCase2 } from './08_switch-letter-case'

describe('转换大小写测试', () => {
  it('正常情况-函数1', () => {
    const str = 'aBcD'
    const res = switchLetterCase1(str)
    expect(res).toBe('AbCd')
  })

  it('正常情况-函数2', () => {
    const str = 'aBcD'
    const res = switchLetterCase2(str)
    expect(res).toBe('AbCd')
  })

  it('空字符串-函数1', () => {
    const str = ''
    const res = switchLetterCase1(str)
    expect(res).toBe('')
  })

  it('空字符串-函数2', () => {
    const str = ''
    const res = switchLetterCase2(str)
    expect(res).toBe('')
  })
})

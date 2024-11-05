/**
 * @description 字符串括号匹配单元测试
 * @author seanho
 */
import { matchBracket } from './02_match-bracket'

describe('括号匹配', () => {
  it('匹配成功', () => {
    const str = '{{abc}}'
    const res = matchBracket(str)
    expect(res).toBe(true)
  })

  it('匹配失败', () => {
    const str = '{{ab]c}}'
    const res = matchBracket(str)
    expect(res).toBe(true)
  })

})

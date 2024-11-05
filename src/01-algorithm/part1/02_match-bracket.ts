/**
 * @description index
 * @author seanho
 */

/**
 * @param left 左括号
 * @param right 右括号
 */
 function isMatch(left: string, right: string): boolean {
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  if (left === '(' && right === ')') return true
  return false
}

/**
 * @param str
 */
export function matchBracket(str: string): boolean {
  const length = str.length
  if (length === 0) return true

  const stack = []

  const leftSymbols = '{[('
  const rightSymbols = '}])'

  for (let i = 0; i < length; i++) {
    const s = str[i]
    if (leftSymbols.includes(s)) {
      // 左括号压栈
      stack.push(s)
    } else if (rightSymbols.includes(s)) {
      // 右括号 出栈
      const top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

// 功能测试
const str1 = '{{abc}}'
console.log(matchBracket(str1))

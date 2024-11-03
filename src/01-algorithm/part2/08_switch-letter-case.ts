
/**
 * 切换字母大小写
 * @param s
 * @returns
 */
function switchLetterCase1 (s: string): string {
  let res = ''

  const length = s.length
  if (length === 0) return res

  const reg1 = /[a-z]/
  const reg2 = /[A-Z]/

  for(let i = 0; i < length; i++) {
    if (reg1.test(s[i])) {
      res += s[i].toUpperCase()
    } else if(reg2.test(s[i])) {
      res += s[i].toLocaleLowerCase()
    } else {
      res += s[i]
    }
  }

  return res
}

/**
 * 切换字母大小写 ASCII编码
 * (65<code<90是大写A-Z的编码范围)
 * (97<code<122是小写a-z的编码范围)
 */
function switchLetterCase2 (s: string): string {
  let res = ''

  const length = s.length
  if (length === 0) return res

  for(let i = 0; i < length; i++) {
    const code = s[i].charCodeAt(0)
    if (code >= 65 && code < 90) {
      res += s[i].toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res += s[i].toUpperCase()
    } else {
      res += s[i]
    }
  }

  return res
}

const str = 'AbCdasddddddddddddddddddddddssweqqweqweeqwqweqweczx'
console.time('1')
console.log(switchLetterCase1(str))
console.timeEnd('1')
// 1.876ms

console.time('2')
console.log(switchLetterCase2(str))
console.timeEnd('2')
// 0.158ms

// 正则表达式性能差

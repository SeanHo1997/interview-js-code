
interface IRes {
  char: string,
  length: number
}

/**
 * 求字符串连续最多次数的字符
 * @param str
 * @returns
 */
function findContinuousChar1(str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0
  }
  const length = res.length
  if (length === 0) return res

  let tempLength = 0
  for (let i = 0; i < length; i++) {
    // 记得重置
    tempLength = 0

    for (let j = i; j < length; j++) {
      if(str[i] === str[j]) {
        // 相等则记录
        tempLength++
      }

      if (str[i] !== str[j] || j === length - 1) {
        // 不相等 或者走到最后一个元素 去判断最大值
        if(tempLength > res.length) {
          res.char = str[i]
          res.length = tempLength
        }

        if (i < length - 1) { // 如果i不指向最后一个
          i = j - 1 // 跳步
        }

        break
      }
    }
  }

  return res
}

/**
 * 求字符串连续最多次数的字符 （双指针）
 * @param str
 * @returns
 */
function findContinuousChar2(str: string): IRes {
  const res = {
    char: '',
    length: 0
  }
  const length = str.length
  if (length === 0) return res
  let tempLength = 0

  // 定义两个双指针
  let i = 0
  let j = 0

  for(; i < length; i++) {
    if (str[i] === str[j]) {
      // 如果相等则记录+1
      tempLength++
    }
    if (str[i] !== str[j] || i === length - 1) {
      // 如果不相等则比较长度,大于则替换res的内容
      if (tempLength > res.length) {
        res.length = tempLength
        res.char = str[i]
      }
      // 任何情况的不相等都要重置tempLength
      tempLength = 0

      if (i < length - 1) {
        // 如果不相等且没有循环完且tempLength没有比现有的res.length长，则
        j = i
        i-- // 因为最外层循环有个i++ 所以这里i-- (细节！)
      }
    }
  }

  return res
}

// 功能测试
const str1 = 'aakkkkcccoooooooo'

console.time('findContinuousChar1')
findContinuousChar1(str1)
console.timeEnd('findContinuousChar1')

console.time('findContinuousChar1')
findContinuousChar2(str1)
console.timeEnd('findContinuousChar1')

// 经过时间测试发现 两个时间复杂度差不多O(n)

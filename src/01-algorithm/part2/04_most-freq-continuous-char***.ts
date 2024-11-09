
interface IRes {
    char: string,
    length: number
}

/**
 * 求字符串连续最多次数的字符
 * @param str
 * @returns
 */
function findLongestContinuousChar(str: string): IRes {
    const res: IRes = {
        char: '',
        length: 0
    }
    const length = res.length
    for (let i = 0; i < length; i++) {
        // 记得重置
        let tempLength = 0
        for (let j = i + 1; j < length; j++) {
            if (str[i] === str[j]) {
                // 相等则记录
                tempLength++
            } else {
                break
            }
        }
        if (tempLength > res.length) {
            res.char = str[i]
            res.length = tempLength
        }

    }

    return res
}

/**
 * 求字符串连续最多次数的字符 （双指针）
 * @param str
 * @returns
 */
function findLongestContinuousChar2(str: string): IRes {
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

    for (; i < length; i++) {
        if (str[i] === str[j]) {
            // 如果相等则记录+1
            tempLength++
        } else {
            // 如果不相等则比较长度,大于则替换res的内容
            if (tempLength > res.length) {
                res.length = tempLength
                res.char = str[i]
            }
            // 任何情况的不相等都要重置tempLength
            tempLength = 1
            j = i
        }
    }

    return res
}

// 功能测试
const str1 = 'aakkkkcccoooooooo'

console.time('findLongestContinuousChar')
findLongestContinuousChar(str1)
console.timeEnd('findLongestContinuousChar')

console.time('findLongestContinuousChar2')
findLongestContinuousChar2(str1)
console.timeEnd('findLongestContinuousChar2')

// 经过时间测试发现 两个时间复杂度差不多O(n)

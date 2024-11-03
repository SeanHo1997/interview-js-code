/**
 * 判断从1开始到一个数字(参数)的对称数(回文数)
 * @param max 传入一个数字
 * @returns
 * TC: O(n^2)
 */
export function findPalindromeNumber1(max: number): number[] {
    const res: number[] = []

    // 不可以传负数
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const s = i.toString()
        if (s === s.split('').reverse().join('')) {
            // 先转为字符串再转为数组再反转合并为字符串比较
            res.push(i)
        }
    }
    return res
}

// 功能测试
// console.log(findPalindromeNumber(100))

/**
 * 思路2 直接字符串前后比较
 * @param {number} max 传入数组
 * @returns {number[]} 从1到max的对称数组成的数组
 */
export function findPalindromeNumber2(max: number): number[] {
    const res: number[] = []

    // 不可传负数
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const s = i.toString()

        let flag = true // 是否回文的标志
        let startIndex = 0
        let endIndex = s.length - 1

        while (startIndex < endIndex) { // 此时的判断条件已经排除了个位数的情况
            if (s[startIndex] !== s[endIndex]) {
                flag = false
                // 不等于直接退出
                break
            }
            // 如果等于则向中间靠拢
            startIndex++
            endIndex--
        }

        if(flag) {
            res.push(i)
        }
    }

    return res
}

// 思路3 直接对数字反转
export function findPalindromeNumber3(max: number): number[] {
    const res: number[] = []
    if(max <= 0) return res

    for(let i = 1; i <= max; i++) {
        let n = i
        let rev = 0 // 存储翻转数

        // 生成翻转数
        while(n > 0) {
            rev = rev * 10 + n % 10 // 取得rev扩大10倍 + n最后一位
            n = Math.floor(n / 10)  // 舍弃n的最后一位
        }

        if(i === rev) res.push(i)
    }

    return res
}

console.time('findPalindromeNumber1')
findPalindromeNumber1(1000)
console.timeEnd('findPalindromeNumber1')

console.time('findPalindromeNumber2')
findPalindromeNumber2(1000)
console.timeEnd('findPalindromeNumber2')

console.time('findPalindromeNumber3')
findPalindromeNumber3(1000)
console.timeEnd('findPalindromeNumber3')

// 第二和第三种思路性能最高 第一种操作字符串数组消耗性能虽然看似时间复杂度是O(n)
// 总结 操作数字最快 操作字符串数组慢

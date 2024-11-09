
/**
 * 移动数组中所有值是0的元素到数组末尾（要求在原数组基础上修改）
 * @param arr number arr
 * @returns void
 * TC: (n^2)
 */
function moveZero1(arr: number[]): void {
    const length = arr.length
    if (length === 0) return
    let zeroLength = 0
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1)
            i-- // 重新检查此时的i
            zeroLength++ // zeroLength不需要判断
        }
    }
}

/**
 * 移动数组中所有值是0的元素到数组末尾 (双指针思路)
 * @param arr number arr
 * @returns void
 * TC: O(n)
 */
function moveZero2(arr: number[]): void {
    const length = arr.length

    let j = 0; // j指向下一个要放置非零元素的位置

    for (let i = 0; i < length; i++) {
        if (arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
}

// 功能测试
const moveZeroArr = [1, 2, 0, 3, 0, 4, 0, 5]
console.time('1')
moveZero1(moveZeroArr)
console.timeEnd('1')
// console.log(moveZeroArr)

console.time('2')
// moveZero2(moveZeroArr)
console.timeEnd('2')
// console.log(moveZeroArr)


/**
 * 斐波那契数列(递归) TC: O(2^n)
 * @param n
 * @returns
 */
// function fibonacci1(n: number): number {
//   // let res = []
//   if (n <= 0) return 0
//   if (n === 1) return 1

//   // res.push
//   return fibonacci1(n - 1) + fibonacci1(n - 2)
// }

/**
 * 斐波那契数列(循环) TC: O(n)
 */
function fibonacci2 (n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1

  let n1 = 1 // 记录n - 1的结果
  let n2 = 0 // 记录n - 2的结果
  let res = 0

  for (let i = 2; i <= n; i++) {
    res = n1 + n2

    // 记录中间结果
    n2 = n1
    n1 = res
  }

  return res
}

// 功能测试
// console.log(fibonacci1(100))
console.log(fibonacci2(5))

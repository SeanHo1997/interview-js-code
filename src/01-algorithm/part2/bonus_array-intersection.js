// 求两数组之交集
function getIntersection (arr1, arr2) {
  const res = new Set()
  const set2 = new Set(arr2)

  for(let item of arr1) {
    if (set2.has(item)) {
      res.add(item)
    }
  }

  return Array.from(res)
}

// 求并集
function getUnion (arr1, arr2) {
  const res = new Set(arr1)

  for(let item of arr2) {
    res.add(item)
  }

  return Array.from(res)
}

// 功能测试
const arr1 = [1, 3, 4, 6, 7]
const arr2 = [2, 5, 3, 6, 1]

console.log(getIntersection(arr1, arr2))
console.log(getUnion(arr1, arr2))


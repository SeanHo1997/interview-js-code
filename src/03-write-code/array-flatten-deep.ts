/**
 * @param arr 
 * @returns 
 */

export const flattenArrayDeep = (arr: any[]): any[] => {
  const result: any[] = []
  arr.forEach((item, index) => {
    if (Array.isArray(item)) {
      // 此时递归
      const recursedItem = flattenArrayDeep(item)
      result.push(...recursedItem)
    } else {
      result.push(item)
    }
  })
  return result
}

// 功能测试
// console.log(flattenArrayDeep([1,2,3]))
// console.log(flattenArrayDeep([1,2,[3,4,[5,6]]]))

/**
 * 
 * @param arr 
 * @returns 
 */

export const flattenArray = (arr: any[]): any[] => {
  let result: any[] = []
	arr.forEach((item, index) => {
    if (Array.isArray(item)) {
			result = result.concat(item)
    } else {
      result.push(item)
    }
  })
  return result
}

// 功能测试
// console.log(flattenArray([1,2,3]))
console.log(flattenArray([1,2,[2,2,3]]))

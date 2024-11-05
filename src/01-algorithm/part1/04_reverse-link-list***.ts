export interface ILinkListNode {
  value: number,
  // prev?: ILinkListNode,
  next?: ILinkListNode
}

/**
 * @description 创建链表
 */
export function createLinkList (arr: number[]): ILinkListNode {
  let currNode: ILinkListNode = {
    value: arr[arr.length - 1]
  }

  // 数组长度为0的情况
  if (arr.length === 0) throw new Error('arr is empty')
  // 数组长度为1的情况
  if(arr.length === 1) return currNode

  for(let i = arr.length - 2; i >= 0; i--) {
    currNode = {
      value: arr[i],
      next: currNode
    }
  }
  return currNode
}

// 功能测试
// const linklist = createLinkList([1,2,3])
// console.log(linklist)

/**
 * @description 反转单向链表 并返回反转之后的head node
 */

export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  // 定义三个指针
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode
  while (nextNode) {
    // 第一个元素删除掉next属性 防止循环引用
    if (curNode && !prevNode) {
      delete curNode.next
    }

    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode
    }

    // 整体向后移动
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }

  // 最后一个
  curNode!.next = prevNode

  return curNode!
}

// 功能测试
const arr2 = [1,2,3,4,5]
const list = createLinkList(arr2)
const revList = reverseLinkList(list)
console.log(list)
console.log(revList)

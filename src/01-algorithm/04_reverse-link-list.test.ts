/**
 * @description 反转单向链表
 * @author seanho
 */

import { ILinkListNode, createLinkList, reverseLinkList } from './04_reverse-link-list***'

describe('反转单向链表', () => {
  it('单个元素', () => {
    const node: ILinkListNode = { value: 100 }
    const node1 = reverseLinkList(node)
    expect(node1).toEqual({ value: 100 })
  })

  it('多个元素', () => {
    const arr = createLinkList([1,2,3])
    const node2 = reverseLinkList(arr)
    expect(node2).toEqual({
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1
        }
      }
    })
  })
})

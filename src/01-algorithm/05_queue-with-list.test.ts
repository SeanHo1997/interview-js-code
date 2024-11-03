/**
 * @description 链表实现队列 test
 * @author seanho
 */

import { myQueue, IListNode } from './05_queue-with-list***'

describe('链表实现队列', () => {
  it('add adn length', () => {
    const q = new myQueue()
    expect(q.length).toBe(0)

    q.add(1)
    q.add(2)
    q.add(2)
    expect(q.length).toBe(3)
  })

  it('delete', () => {
    const q = new myQueue()
    expect(q.delete()).toBeNull()

    q.add(1)
    q.add(2)
    q.add(3)

    expect(q.delete()).toBe(1)
    expect(q.delete()).toBe(2)
    expect(q.delete()).toBe(3)
    expect(q.delete()).toBeNull()
  })
})

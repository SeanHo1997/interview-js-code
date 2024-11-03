import { MyQueue } from "./03_two-stacks-one-queue";

describe('两个栈组成一个队列', () => {
  it('队列add内容', () => {
    const q = new MyQueue()
    q.add(1)
    q.add(2)
    expect(q.length).toBe(2)
  })
  it('出队', () => {
    const q = new MyQueue()
    q.add(1)
    q.add(2)
    q.add(3)
    q.delete()
    expect(q.length).toBe(2)
  })
})

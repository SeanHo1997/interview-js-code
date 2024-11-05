/**
 * @description 两个栈 实现 一个队列
 * @author seanho
 */

export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  // 入队
  add(n: number) {
    this.stack1.push(n)
  }

  // 出队
  delete(): number | null {
    let res
    const stack1 = this.stack1
    const stack2 = this.stack2

    // stack1中的元素移到stack2中
    while(stack1.length) {
      const n = stack1.pop()
      if(n !== null) {
        stack2.push(n!)
      }
    }

    // 先pop一个
    res = stack2.pop()

    // stack2中的元素还给stack1
    while(stack2.length) {
      const n = stack2.pop()
      if(n !== null) {
        stack1.push(n!)
      }
    }

    return res || null
  }

  get length(): number {
    return this.stack1.length
  }
}

// 功能测试
const queue = new MyQueue()
queue.add(1)
queue.add(2)
queue.add(3)
console.log(queue.length)
queue.delete()
console.log(queue.length)


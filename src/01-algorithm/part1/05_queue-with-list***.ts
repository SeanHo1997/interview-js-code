/**
 * @description 链表实现队列
 * @author seanho
 */

export interface IListNode {
    value: number,
    next: IListNode | null
}

export class myQueue {
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0

    // 在tail入队
    add(n: number) {
        // 处理head
        const newNode: IListNode = {
            value: n,
            next: null
        }

        if (this.head === null) {
            this.head = newNode
        }

        // 处理tail
        const tailNode = this.tail
        if (!tailNode) {
            this.tail = newNode
        } else {
            tailNode.next = newNode
            this.tail = newNode
        }

        this.len++
    }

    // 在head出队
    delete(): number | null {
        const headNode = this.head
        if (headNode === null) return null
        if (this.len === 0) return null
        const value = headNode.value
        this.head = headNode.next
        this.len--
        return value
    }

    get length(): number {
        // length要单独存储 不能遍历链表获取 否则时间复杂度太高 O(n)
        return this.len
    }
}

// 功能测试
const q = new myQueue()
q.add(1)
q.add(2)
q.add(3)
console.log('length:', q.length)
console.log(q.delete())
console.log('length:', q.length)
console.log(q.delete())
console.log('length:', q.length)
console.log(q.delete())

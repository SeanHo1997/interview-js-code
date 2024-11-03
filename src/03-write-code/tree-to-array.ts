/**
 * @description tree to arr
 * @author seanho
 */

const obj = {
  id: 1,
  name: '部门A',
  children: [
    {
      id: 2,
      name: '部门B',
      children: [
        { id: 4, name: '部门D' },
        { id: 5, name: '部门E' }
      ]
    },
    {
      id: 3,
      name: '部门C',
      children: [
        { id: 6, name: '部门F' }
      ]
    }
  ]
}

interface IArrayItem {
  id: number,
  name: string,
  parentId: number
}

interface ITreeNode {
  id: number,
  name: string,
  children?: ITreeNode[]
}

function convertTreeToArray(root: ITreeNode): IArrayItem[] {
  // 先定义一个Map 映射当前节点和父节点的关系
  const nodeToParent: Map<ITreeNode, ITreeNode> = new Map()

  const arr: IArrayItem[] = []
  // 广度优先遍历
  const queue: ITreeNode[] = []
  queue.unshift(root)
  
  while(queue.length > 0) {
    const curNode = queue.pop() // 出队
    if (curNode === null) break

    const { id, name, children = [] } = curNode

    // 创建数组item并push
    const parentNode = nodeToParent.get(curNode)
    const pid = parentNode?.id || 0
    const item = { id, name, pid }
    arr.push(item)

    children.forEach(child => {
      // 映射parent
      nodeToParent.set(child, curNode)
      // 入队
      queue.unshift(child)
    })
  }

  return arr
}

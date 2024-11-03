/**
 * @description 数组转树形结构
 * @author seanho
 */

interface IArrayItem {
  id: number,
  name: string,
  pid: number
}

interface ITreeNode {
  id: number,
  name: string,
  children?: ITreeNode[]
}

const unTreedarr = [
  { id: 1, name: '部门A', pid: 0 }, // pid为0代表顶级节点，无父节点
  { id: 2, name: '部门B', pid: 1 },
  { id: 3, name: '部门C', pid: 1 },
  { id: 4, name: '部门D', pid: 2 },
  { id: 5, name: '部门E', pid: 2 },
  { id: 6, name: '部门F', pid: 3 }
]

function converArrayToTree(arr: IArrayItem[]): ITreeNode | null {
  // 用于id和treeNode的映射
  const map: Map<number, ITreeNode> = new Map()

  let root = null

  arr.forEach(item => {
    const { id, name, pid } = item
    const treeNode: ITreeNode = { id, name }
    map.set(id, treeNode)

    // 找到根节点(pid === 0 || pid === null)
    if (!pid) root = treeNode

    // 找到父节点并加入到它的children
    if (pid) {
      const parentNode = map.get(pid)
      if (parentNode?.children === null) {
        parentNode.children = []
      }
      parentNode?.children?.push(treeNode)
    }
  })

  return root
}

const tree = converArrayToTree(unTreedarr)
console.info(tree)

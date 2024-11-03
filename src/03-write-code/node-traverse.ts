/**
 * @description 遍历DOM树
 * @author seanho
 */

/**
 * @param n node
 */

function visitNode(n: Node) {
  if (n instanceof Comment) {
    // 注释
    console.info('Comment node ---', n.textContent)
  }
  if (n instanceof Text) {
    // 文本节点
    console.info('Text node ---', n.textContent?.trim())
  }
  if (n instanceof Element) {
    // 元素
    console.info('Element node ---', `${n.tagName.toLowerCase()}`)
  }
}

/**
 * 深度优先遍历
 * @param root dom node
 */
function depthFirstTraverse(root: Node) {
  visitNode(root)
  const childNodes = root.childNodes // children和childNodes不一样 children只有元素节点
  if (childNodes.length) {
    childNodes.forEach(child => {
      depthFirstTraverse(child) // 递归
    })
  }
}

/**
 * 广度优先遍历
 * @param root dom node
 */
function breadthFirstTraverse(root: Node) {
  const queue: Node[] = [] // 用数组实现队列
  // 根节点入队
  queue.unshift(root)

  while (queue.length) {
    const currNode = queue.pop()
    visitNode(currNode!)

    // 子节点入队
    const childNodes = currNode!.childNodes
    if (childNodes.length) {
      childNodes.forEach(child => queue.unshift(child))
    }
  }
}

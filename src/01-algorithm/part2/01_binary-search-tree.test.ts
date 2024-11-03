import { IBinaryTreeNode, binaryTree, getKthValue } from './01_binary-search-tree'

/**
 * @description 二搜索叉树 BST
 * @author seanho
 */

it('正常情况', () => {
  const res1 = getKthValue(binaryTree, 1)
  expect(res1).toBe(2)
})
it('非正常情况', () => {
  const res1 = getKthValue(binaryTree, 1000)
  expect(res1).toBeNull()
  const res2 = getKthValue(binaryTree, 0)
  expect(res2).toBeNull()
})

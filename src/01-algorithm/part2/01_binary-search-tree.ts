/**
 * @description 二叉树遍历
 * @author seanho
 */

// 二叉树遍历三种方式:
  // 前序遍历 ABC
  // 中序遍历 BAC
  // 后序遍历 BCA

export interface IBinaryTreeNode {
  value: number,
  left: IBinaryTreeNode | null,
  right: IBinaryTreeNode | null
}

export const binaryTree: IBinaryTreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

const arr1: number[] = []

/**
 * 二叉树前序遍历
 * @params tree node
 */
function preOrderTraverse(node: IBinaryTreeNode | null) {
  if (node === null) return null
  console.log(node.value)
  arr1.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * 二叉树中序遍历
 * @params tree node
 */
function inOrderTraverse(node: IBinaryTreeNode | null) {
  if (node === null) return null
  inOrderTraverse(node.left)
  console.log(node.value)
  arr1.push(node.value)
  inOrderTraverse(node.right)
}

/**
 * @description 二叉树后序遍历
 * @params tree node
 */
function postOrderTraverse(node: IBinaryTreeNode | null) {
  if (node === null) return null
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  console.log(node.value)
  arr1.push(node.value)
}

/**
 * 寻找BST中第K小值
 * @description node tree
 * @params k 第几小值
 */
export function getKthValue(node: IBinaryTreeNode, k: number): number | null {
  inOrderTraverse(node)
  console.log(arr1)
  return arr1[k - 1] || null
}

// 功能测试
// preOrderTraverse(binaryTree) 
// inOrderTraverse(binaryTree)
// postOrderTraverse(binaryTree)

console.log('第一小的值', getKthValue(binaryTree, 1))

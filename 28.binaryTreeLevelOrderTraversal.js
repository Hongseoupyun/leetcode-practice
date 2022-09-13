/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function levelOrder(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((node) => node.val));
    while (len--) {
      let currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true; // Both trees are empty, considered same
    }

    if (p === null || q === null) {
        return false; // One tree is empty while the other is not, considered different
    }

    if (p.val !== q.val) {
        return false; // Values of the current nodes are different, considered different
    }

    // Recursively check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};5

console.log(isSameTree([1, 2], [1, null, 2]));
console.log(isSameTree([1, 2, 1], [1, 1, 2]));
console.log(isSameTree([1, 2, 3], [1, 2, 3]));

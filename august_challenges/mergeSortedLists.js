/**
 * Definition for singly-linked l.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function (lists) {
  let ans;
  const iter = (l) => {
    if (!l) return;
    const { val, next } = l;
    if (!ans) ans = new ListNode(val);
    else {
      if (ans.val >= val) ans = new ListNode(val, ans);
      else {
        let temp = ans;
        while (temp.next && temp.next.val <= val) temp = temp.next;
        temp.next = !temp.next
          ? new ListNode(val)
          : new ListNode(val, temp.next);
      }
    }
    iter(next);
  };
  for (let l of lists) iter(l);
  if (ans) return ans;
  return new ListNode().next;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);

console.log(mergeKLists([]));
console.log(mergeKLists([[]]));

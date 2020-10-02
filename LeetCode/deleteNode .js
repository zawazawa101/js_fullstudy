//剑指 Offer 18. 删除链表的节点
//给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。
// 示例 1: 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var deleteNode = function(head, val) {
  let headNode = new ListNode()
  headNode.next = head
  let previous = headNode  
  let current = head

  while(current) {
    if(current.val === val) {
      let temp = current.next
      previous.next = temp
      current.next  = null
      break
    }
    previous = current
    current = current.next
  }
  return headNode.next
};
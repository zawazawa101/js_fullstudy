// 24. 两两交换链表中的节点
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let six = new ListNode(6)
let five = new ListNode(5, six)
let four = new ListNode(4, five)
let three = new ListNode(3, four)
let two = new ListNode(2, three)
let head = new ListNode(1, two)

var swapPairs = function(head) { //给定 1->2->3->4,
  if(!head) {
    return null
  }
  if(head.next == null){
    return head
  }
  let curr = head
  let later = curr.next  
  swag(curr, later)
  return later
};
function swag(curr, later) {
  if(later === null){
    return
  }
  let temp = later.next
  later.next = curr
  curr.next = temp
  // console.log(curr.next);
  if(temp !== null && temp.next !== null) {
    curr.next = temp.next
    swag(temp, temp.next)
  }
}

swapPairs(head)

let str = ''
function eachOne(head) {
  str += head.val
  if(head.next) {
    eachOne(head.next)
  }
}
eachOne(two)
console.log(str);

/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if(!head) return null
  let listNode :ListNode = new ListNode(head.val)
  let listNext :ListNode = listNode
  let next :ListNode = head
  while(next !== null) {
    if(listNext.val !== next.val) {
      listNext.next = new ListNode(next.val)
      listNext = listNext.next
    }
    next = next.next
  }
  return listNode
};
// @lc code=end


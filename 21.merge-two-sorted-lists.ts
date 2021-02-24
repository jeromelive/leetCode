/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let total = new ListNode()
  let temp1 = l1
  let temp2 = l2
  let cur = total
  while(temp1 !== null || temp2 !== null) {
    if(temp1 !== null && temp2 !== null) {
      if(temp1.val <= temp2.val) {
        cur.val = temp1.val
        cur.next = new ListNode(temp2.val, null)
      } else {
        cur.val = temp2.val
        cur.next = new ListNode(temp1.val, null)
      }
    }

    if(temp1 === null) {
      cur.val = temp2.val
      if(temp2.next === null) {
        cur.next = null
      } else {
        cur.next = new ListNode()
      }
    }

    if(temp2 === null) {
      cur.val = temp1.val
      if(temp1.next === null) {
        cur.next = null
      } else {
        cur.next = new ListNode()
      }
    }

    cur = cur.next
    temp1 = l1.next || null
    temp2 = l2.next || null
  }
  return total
};
// @lc code=end


const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class newNode {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
module.exports = class Queue {
 
  getUnderlyingList() {
    return this.queue
  }

  enqueue(value) {
    if (!this.queue) {
       this.queue = new newNode(value)
    } else {
      let tail = this.queue

      while(tail.next ) {
       tail = tail.next 
      }
      tail.next = new newNode(value)
    }
  }
  
  dequeue() {
    let deleted = this.queue;
    this.queue = this.queue.next;
    let result = deleted.value;
    return result
  }
}

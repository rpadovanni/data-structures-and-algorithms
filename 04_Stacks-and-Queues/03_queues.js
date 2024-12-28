/**
 * Queues = FIFO (First In, First Out)
 *
 * Big-O
 * - lookup = O(n)
 * - enqueue = O(1)
 * - dequeue = O(1)
 * - peek = O(1)
 *
 * Can be used only with linked lists
 * - Why: linked lists have a O(1) complexity since
 *        is just rearranging pointers directly.
 *        Using an array for that would cause a index
 *        shift every time, causing a O(n) complexity;
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      this.last = null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return this;
  }
}

const myQueue = new Queue();

// Adding to the queue
myQueue.enqueue('Rafael');
myQueue.enqueue('James');
myQueue.enqueue('Webb');
myQueue.enqueue('Padovani');

// Logging
console.log(myQueue.peek());
console.log(myQueue);

// Removing from the queue
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

// Logging
console.log(myQueue);

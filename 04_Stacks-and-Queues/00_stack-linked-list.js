/**
 * Stacks = LIFO (Last In, First Out)
 *
 * Big-O
 * - lookup = O(n) // Should be avoided traversing a stack
 * - pop = O(1)
 * - push = O(1)
 * - peek = O(1)
 *
 * Can be used with array and linked lists
 * - Arrays: faster when using a fixed length, due to pointers
 *           being next to each other in memory. Using dynamic
 *           arrays can make memory allocation double up when
 *           length gets higher than initial length;
 * - Linked Lists: have more dynamic memory allocation, better
 *                 for dynamic arrays because of memory pointers
 *                 being allocated "randomly";
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;

    return this;
  }
}

const myStack = new Stack();

// Adding to the stack
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');

// Logging
console.log('Peek', myStack.peek());
console.log('Full', myStack);

// Removing from the stack
myStack.pop();
myStack.pop();
myStack.pop();

// Logging
console.log('Final', myStack);

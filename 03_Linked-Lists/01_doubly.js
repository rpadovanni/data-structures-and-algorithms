/**
 * Big-O:
 * - prepend = O(1)
 * - append = O(1)
 * - lookup = O(n)
 * - insert = O(n)
 * - delete = O(n)
 */

/**
 * Should be: 10 --> 5
 * Then: 10 -> 5 -> 16 (append)
 * Then: 1 -> 10 -> 5 -> 16 (prepend)
 * Then: 1 -> 10 -> 99 -> 5 -> 16 -> 88 (insert)
 * Then: 1 -> 10 -> 5 -> 16 -> 88 (remove)
 *
 * Structure:
 * let myLinkedList = {
 *   head: {
 *     value: 10,
 *     next: {
 *       value: 5,
 *       next: {
 *         value: 16,
 *         next: null,
 *         previous: {
 *           value: 5,
 *           previous: {
 *             value: 10,
 *             previous: null
 *             next: { ... }
 *           }
 *         }
 *       },
 *       previous: {
 *         value: 10,
 *         previous: null
 *       }
 *     },
 *     previous: null
 *   },
 * };
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;

    this.length++;

    return this.printList();
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    unwantedNode.previous = leader;
    leader.next = unwantedNode.next;

    this.length--;
    this.printList();
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
console.log(myLinkedList.printList());

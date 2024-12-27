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
 *       },
 *     },
 *   },
 * };
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
    const currentNode = leader.next;
    leader.next = newNode;
    newNode.next = currentNode;

    return this.printList();
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    this.printList();
  }

  reverse() {
    // If only one node, nothing to reverse
    if (!this.head.next) {
      return this.head;
    }

    /**
     * Logic:
     * - Traverse the list
     * - For each node, make its next value point
     *   to the previous instead of the next
     * - This will reverse the list
     *
     * Example:
     * - Given: [1, 10, 16, 88]
     * - Result: [88, 16, 10, 1]
     */

    /**
     * Init:
     * - tail will be the same as head, since the last node will be the first
     * - first is the current node, starting with head
     * - second is the next node, that will be moved
     */
    this.tail = this.head;
    let first = this.head;
    let second = first.next;

    // While there are node to process (second is not null)
    while (second) {
      const temp = second.next; // saving "third" node
      second.next = first; // reverting connection, instead of moving forward second will point backwards
      first = second; // first node become the second node
      second = temp; // setting the next node

      /**
       * Initially
       * - first = 1
       * - second = 10
       *
       * Loop 01
       * - temp = 16 (10.next)
       * - 10.next = 1 (now the second node points to the first)
       * - advances with first = 10 and second = 16
       *
       * Loop 02
       * - temp = 88 (16.next)
       * - 16.next = 10
       * - advances with first = 16 and second = 88
       *
       * Loop 03
       * - temp = null (88.next, so no more nodes)
       * - 88.next = 16
       * - advances with first = 88 and second = null
       */
    }

    /**
     * Finally:
     * - Old first node(this.head) becomes the tail
     * - Since the tail doesn't have a next node, it's set to null
     * - First node(this.head) becomes the last processed node
     */
    this.head.next = null;
    this.head = first;

    // Prints reversed list
    return this.printList();
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

const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);

console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());

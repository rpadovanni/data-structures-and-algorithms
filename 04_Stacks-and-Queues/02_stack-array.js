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

// Simpler approach
const stack = [];
const peek = () => stack[stack.length - 1];
const push = value => stack.push(value);
const pop = () => stack.pop();

// Adding to the stack
push('Discord');
push('Udemy');
push('Google');

// Logging
console.log('Peek', peek());
console.log('Full', stack);

// Removing from the stack
pop();
pop();
pop();

// Logging
console.log('Final', stack);

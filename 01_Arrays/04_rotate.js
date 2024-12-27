/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  for (let times = k; times > 0; times--) {
    const last = nums[nums.length - 1];

    nums.pop();
    nums.unshift(last);
  }

  return nums.toString();
} // Time: O(n * k) | Space: O(1)

function rotateReversal(nums, k) {
  // Example: nums = [1,2,3,4,5], k = 2;
  k = k % nums.length; // Handle cases where k > nums.length
  reverse(nums, 0, nums.length - 1); // 1. Reverse entire array -> [5,4,3,2,1]
  reverse(nums, 0, k - 1); // 2. Reverse the first k elements -> [4,5,3,2,1]
  reverse(nums, k, nums.length - 1); // 3. Reverse the remaining n - k elements -> [4,5,1,2,3]
  return nums.toString();

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  }
} // Time: O(n) | Space: O(1)

console.log({
  first: rotate([1, 2, 3, 4, 5, 6, 7], 3),
  second: rotateReversal([1, 2, 3, 4, 5, 6, 7], 3),
  expected: '5,6,7,1,2,3,4',
});

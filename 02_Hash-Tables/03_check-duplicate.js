function containsDuplicate(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
} // O(n) --> Linear Time | Space Complexity

console.log({
  first: containsDuplicate([1, 2, 3, 1]),
  second: containsDuplicate([1, 2, 3, 4]),
  third: containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
  fourth: containsDuplicate([2, 14, 18, 22, 22]),
});

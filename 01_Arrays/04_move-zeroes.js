const moveZeroes = nums => {
  const length = nums.length - 1;

  for (let i = length; i >= 0; i--) {
    if (length !== 0) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        nums.push(0);
      }
    }
  }

  return nums;
}; // Time compl.: O(n^2) --> Quadratic Time

const enhancedMoveZeroes = nums => {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}; // Time compl.: O(n) --> Linear Time

console.log('FUNCTION 1', {
  first: moveZeroes([0, 1, 0, 3, 12]),
  second: moveZeroes([0]),
  third: moveZeroes([2, 1]),
});

console.log('FUNCTION 2', {
  first: enhancedMoveZeroes([0, 1, 0, 3, 12]),
  second: enhancedMoveZeroes([0]),
  third: enhancedMoveZeroes([2, 1]),
});

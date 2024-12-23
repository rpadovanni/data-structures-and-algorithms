// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const firstRecurringCharacter = input => {
  let result = undefined;

  for (let index = 0; index < input.length; index++) {
    if (input[index] === input[index + 1]) {
      result = input[index];
      break;
    } else {
      for (let next = index + 1; next < input.length; next++) {
        if (input[index] === input[next]) {
          result = input[index];
          break;
        }
      }
    }
  }

  return result;
}; // Time comp.: O(n^2) | Space comp.: O(1)

const hashTableFirstRecurringCharacter = input => {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }

  return undefined;
}; // Time comp.: O(n) | Space comp.: O(n)

console.log('First function', {
  first: firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]),
  second: firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]),
  third: firstRecurringCharacter([2, 3, 4, 5]),
  fourth: firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
});
console.log('Second function', {
  first: hashTableFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]),
  second: hashTableFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]),
  third: hashTableFirstRecurringCharacter([2, 3, 4, 5]),
  fourth: hashTableFirstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
});

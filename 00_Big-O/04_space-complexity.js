const boo = n => {
  for (let i = 0; i < n.length; i++) {
    console.log('boo!');
  }
};

const createHiArray = n => {
  const hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
};

boo([1, 2, 3, 4, 5]); // O(1) Space Complexity
createHiArray(6); // O(n) Space Complexity

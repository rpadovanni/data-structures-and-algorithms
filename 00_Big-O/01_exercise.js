// What is the Big O of the below function? (Hint, you may want to go line by line)

const funChallenge = input => {
  let a = 10; // O(1) --> Constant Time
  a = 50 + 3; // O(1) --> Constant Time

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n) --> Linear Time
    let stranger = true; // O(n) --> Linear Time
    a++; // O(n) --> Linear Time
  } // O(n) --> Linear Time

  return a; // O(1) --> Constant Time
};

// Big O = 3 + 4n --> O(n) --> Linear Time

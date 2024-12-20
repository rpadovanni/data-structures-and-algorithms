// What is the Big O of the below function? (Hint, you may want to go line by line)

const anotherFunChallenge = input => {
  let a = 5; // O(1) --> Constant Time
  let b = 10; // O(1) --> Constant Time
  let c = 50; // O(1) --> Constant Time

  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n) --> Linear Time
    let y = i + 2; // O(n) --> Linear Time
    let z = i + 3; // O(n) --> Linear Time
  } // O(n) --> Linear Time

  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n) --> Linear Time
    let q = j * 2; // O(n) --> Linear Time
  } // O(n) --> Linear Time

  let whoAmI = "I don't know"; // O(1) --> Constant Time
};

// Big O = 4 + 7n = O(n) --> Linear Time

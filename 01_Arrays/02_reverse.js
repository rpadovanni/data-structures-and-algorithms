// Create a function that reverses a string:
// 'My favorite food is sushi' should be 'ihsus si doof etirovaf yM'

const reverse = str => {
  // Check input
  if (!str || str.length < 0 || typeof str !== 'string') {
    console.log('Is not a valid input!');
  }

  // Reverse string
  const newString = [];

  for (let i = str.length; i >= 0; i--) {
    newString.push(str[i]);
  }

  console.log(newString.join(''));
};

const enhancedReverse = str => {
  console.log(str.split('').reverse().join(''));
};

const modernReverse = str => console.log([...str].reverse().join(''));

reverse('My favorite food is sushi'); // O(n) --> Linear time
enhancedReverse('My favorite food is sushi'); // O(n) --> Linear time
modernReverse('My favorite food is sushi'); // O(n) --> Linear time

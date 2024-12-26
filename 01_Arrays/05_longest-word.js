const longestWord = sen => {
  const words = sen.split(' ');
  let longestWord = '';

  for (word of words) {
    const clearString = word.replace(/[^a-zA-Z0-9]/g, '');

    if (clearString.length > longestWord.length) {
      longestWord = clearString;
    }
  }

  return longestWord;
}; // Time compl.: O(n) --> Linear Time

console.log({
  result: longestWord('Rafael Padovani'),
  expected: 'Padovani',
});

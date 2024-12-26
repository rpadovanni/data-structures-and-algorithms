// Merge two sorted array into a new sorted one

const mergeSorted = (arrayOne, arrayTwo) => {
  const newArray = [...arrayOne, ...arrayTwo].sort((a, b) => a - b);
  console.log(newArray.join(','));
};

const mergeSortedTwo = (arrayOne, arrayTwo) => {
  const newArray = [];
  let arrayOneItem = arrayOne[0];
  let arrayTwoItem = arrayTwo[0];
  let i = 1;
  let j = 1;

  while (arrayOneItem || arrayTwoItem) {
    if (!arrayTwoItem || arrayOneItem < arrayTwoItem) {
      newArray.push(arrayOneItem);
      arrayOneItem = arrayOne[i];
      i++;
    } else {
      newArray.push(arrayTwoItem);
      arrayTwoItem = arrayTwo[j];
      j++;
    }
  }

  console.log(newArray.join(','));
};

mergeSorted([0, 3, 4, 31], [4, 6, 30]);
mergeSortedTwo([0, 3, 4, 31], [4, 6, 30]);

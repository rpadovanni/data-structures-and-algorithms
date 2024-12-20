const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt'];
const large = new Array(1000).fill('nemo');

const findNemo = array => {
  const t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
      break;
    }
  }

  const t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
};

const findTwoFirstCharacters = array => {
  console.log(array[0]); // O(1) --> Constant Time
  console.log(array[1]); // O(1) --> Constant Time
};

findNemo(large); // O(n) --> Linear Time
findTwoFirstCharacters(everyone); // O(1) --> Constant Time

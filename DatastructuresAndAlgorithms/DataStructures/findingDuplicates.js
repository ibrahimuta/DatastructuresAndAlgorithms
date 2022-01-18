const findingDuplicates = (array) => {
  //          i
  // [1,2,3,4,4]
  //              J
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
      ``;
    }
  }

  return array;
};

const findingDuplicatesUsingSet = (array) => {
  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      return true;
    } else {
      set.add(array[i]);
    }
  }
  return false;
};

const array = [1, 2, 3, 3, 4];

console.log(findingDuplicates(array));
console.log(findingDuplicatesUsingSet(array));

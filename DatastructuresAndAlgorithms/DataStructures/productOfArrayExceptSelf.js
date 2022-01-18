// my implementation
const productOfArrayExceptSelf = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let productArray = [
      ...array.slice(0, i),
      ...array.slice(i + 1, array.length),
    ];
    console.log(productArray);
    result[i] = productArray.reduce((prev, next) => {
      return prev * next;
    });
  }

  return result;
};

const productOfArrayExceptSelfUsingPrefixAndPostFix = (array) => {
  let result = [];
};

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));

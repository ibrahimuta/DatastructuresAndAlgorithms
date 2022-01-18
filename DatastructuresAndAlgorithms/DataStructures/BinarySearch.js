const binarySearch = (array, target) => {
    if (array.length === 0) return -1;
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target === array[mid]) {
            return mid;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

console.log('Binary Search - testing');
const array = [0,1, 2, 3, 4, 5, 6, 7, 8];

const searchedIndex = binarySearch(array, 5);

console.log('searchedIndex ', searchedIndex);




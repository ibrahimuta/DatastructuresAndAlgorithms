const bubbleSot = (array) => {
    let count = 0;
    let isSorted;
    for (let i = 0; i < array.length; i++) {
        isSorted = true;
        for (let j = 1; j < array.length - i; j++) {
            count++;
            if (array[j] < array[j - 1]) {
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }
    }
    console.log(count, 'count');
    return array;
};


console.log('Bubble Sort - testing');
console.log(bubbleSot([1, 3, 2]), 'sorted');

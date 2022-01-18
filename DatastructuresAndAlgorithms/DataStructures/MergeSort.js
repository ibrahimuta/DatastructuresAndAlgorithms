const mergeTwoArraysInOrder = (leftArray, rightArray) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let output = [];

    while (leftIndex <= leftArray.length && rightIndex < rightArray.length) {
        const leftElement = leftArray[leftIndex];
        const rightElement = rightArray[rightIndex];

        if (leftElement < rightElement) {
            output.push(leftElement);
            leftIndex++;
        } else {
            output.push(rightElement);
            rightIndex++;
        }
    }

    return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
};

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return mergeTwoArraysInOrder(mergeSort(leftArray), mergeSort(rightArray));
};


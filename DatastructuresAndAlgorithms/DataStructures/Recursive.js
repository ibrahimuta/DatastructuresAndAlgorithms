const countRecursive = (number) => {
    if (number <= 0) {
        console.log('hurray');
        return;
    }

    console.log(number);
    countRecursive(n - 1);
};

const factorialRecursive = (number) => {
    if (number === 1) return 1;

    return number * factorialRecursive(number - 1);
};

// Find specific index of the Fibonacci series

// 0 1 2 3 4 5 6 07 08
// 0 1 1 2 3 5 8 13 21

const findIndexRecursively = (number,index=0, newFibNumberFirst = 0,newFibNumberSecond=1)=> {
    if(number === newFibNumberFirst) {
        console.log('hurray found the number at index at '+ index);
        return;
    }
    index++;

    findIndexRecursively(number, index, newFibNumberSecond,newFibNumberFirst+newFibNumberSecond)

}

// findIndexRecursively(21);

const fib = (number) =>{
    if(number < 3) return 1;

    return fib(number-1)+ fib(number-2);
}

console.log(fib(7));





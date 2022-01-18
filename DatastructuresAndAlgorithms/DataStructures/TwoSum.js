const twoSum = (array, target) => {

    // [2,1,5,3]
    // 4

    let count = 0;

    for(let i=0; i<array.length; i++){
        const currentElement = array[i];
        for (let j=i+1; j< array.length; j++){
            const nextElement =  array[j];
            count++
            if(currentElement + nextElement === target){
                console.log(count)
                return [i,j];
            }
        }
    }


    return -1;
}

console.log(twoSum([1,2,5,3],4));

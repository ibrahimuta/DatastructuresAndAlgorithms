// Rotated Example
//                 Roted by 2
// [1,2,3,4,5] -----------------> [4,5,1,2,3]

// Solution
// Right Array is mostly smaller than left Array after rotation because we shift the right greater elements to the first
//Left array is bigger than right
// Find if the middle belongs to the right or left M > L we are in Left Array
// If  middle right then go left to find lowest right Array
// If the middle left then go right

// import {min} from "../Util";

 const min = (a,b) => {
    return a<b? a:b;
}


const findMinimumRotatedSortedArray = (array) => {
    let res = array[0];
    let l= 0;
    let r= array.length-1;
    let m;

    while(l<= r){
        if( array[l] <=  array[r]){
               res = min( array[l], res);
               break;
        }
        m = (l+r)/2;
        if(m >  array[l]){
            // M in Left Array and look right for minimum
            l = m+1
        }else {
            // we are in right array and we keep looking left for min
            r= m-1;
        }
    }

    return res;
}

console.log(findMinimumRotatedSortedArray([3,4,5,0,1,2]))

//sorting an object based on its values
console.log('sorting an object based on its values - testing');
const entries = [
    ['a', 2],
    ['d', 9],
    ['b', 4],
    ['c', 6],
];

// const sorted = entries
//     .sort(([, a], [, b]) => a - b)
//     .reduce(
//         (result, [k, v]) => ({
//             ...result,
//             [k]: v,
//         }),
//         {}
//     );

const sorted = entries
    .sort(([,a],[,b]) => a-b)
    .reduce((result, [k,v]) => ({
        ...result,
        [k]: v
    }), {

    })

const fruits = [
    {
        apples: 4,
        pears: 6,
        oranges: 2,
    },
    {
        bananas: 2,
        oranges: 5,
    },
    {
        pears: 8,
        apples: 3,
        bananas: 10,
    },
    {},
    {
        pears: 7,
        apples: 5,
    },
    {
        mangos: 1,
    },
];

const countFruits = (fruits) => {
    return fruits.reduce((result, fruitObj) => {
        Object.entries(fruitObj).forEach(([k, v]) => {
            if (!result[k]) {
                result[k] = 0
            }
            result[k] += fruitObj[k];
        })
        return result;
    }, {});
}

console.log(countFruits(fruits));


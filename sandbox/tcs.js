const countCheeseCakes = (str, q1_l, q1_r) => {

    // * * | * * | * * * |
    // 0 1 2 3 4 5 6 7 8 9
    // 2 5
    const subString = str
    let strArray = subString.split('');
    idxArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === '|') idxArray.push(i);
    }
    let cheeseCountSum = 0;
    for (let i = 0; i < idxArray.length - 1; i++) {
        if (idxArray[i] < q1_l) continue;
        if (idxArray[i + 1] > q1_r) return cheeseCountSum;
        cheeseCountSum += idxArray[i + 1] - idxArray[i] - 1;
    }
    return (cheeseCountSum);
}

const times = 1;
let query_1_l = 14
let query_1_r = 17

for (let i = 0; i < times; i++) {
    console.log(countCheeseCakes("***|**|*****|**||**|*", query_1_l, query_1_r));
}

//  * * * | * * | * * * * * | * * | | * * | *
//  0 1 2 3


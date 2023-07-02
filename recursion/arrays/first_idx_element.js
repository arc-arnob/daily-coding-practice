// If element exists in array print its first idx using recursion only;

const findFirstIdx = (arr, idx, ele) => {
    // Expectation: f([1,2,3,4,5], 5): 3
    // Faith: f([1,2,3,4], 5): -1

    if(idx === arr.length){
        return -1;
    }
    if(arr[idx] === ele){
        return idx;
    }else{
        return findFirstIdx(arr, idx+1, ele);
    }
}

console.log(findFirstIdx([1,2,3,4,5,6,6,6,10], 0, 100));
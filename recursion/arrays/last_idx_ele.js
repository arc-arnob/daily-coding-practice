// Find last idx of element using recursion

const findLastIdx = (arr, idx, ele) => {
    // Expectation: f([1,2,3,4,2,2]): 5
    // Faith: f([1,2,3,4,2]): 4
    
    // Base:
    if(idx < 0) return -1;

    if(ele === arr[idx]){
        return idx;
    }
    return findLastIdx(arr, idx - 1, ele);
}

console.log(findLastIdx([1,1,2,3,4,5,5,5,7,6,3,5], 10, 1));
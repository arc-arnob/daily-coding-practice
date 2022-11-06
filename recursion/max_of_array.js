const maxOfArray = (arr, idx) => {

    // Expectation: f([1,2,3,4]): 4
    // Faith: f([1,2,3]): 3
    // Meet: f([1,2,3,4]): max(3, f([1,2,3,4]));

    if(idx === arr.length){
        return arr[idx-1];
    }

    return Math.max(arr[idx], maxOfArray(arr, idx+1));

}

console.log(maxOfArray([1,2,3,90,677,4,5,76], 0));
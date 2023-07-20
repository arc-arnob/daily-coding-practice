const printArrayReverse = (arr, idx) => {
    // Expectation: f([1,2,3,4,5], 5): 5,4,3,2,1
    // Faith: f([1,2,3,4,5], 4): 4, 3, 2, 1
    // MI: f([], 5): arr[5] + f([], 4)
    // Base case:
    if(idx === 0){
        return;
    }

    console.log(arr[idx-1]);
    printArrayReverse(arr, idx-1);
}

printArrayReverse([1,2,3,4,5,6], 6);
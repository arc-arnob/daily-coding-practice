const printArrayWithRecursion = (arr, idx) => {
    // base case
    if(idx === arr.length){
        return;
    }
    console.log(arr[idx]);
    printArrayWithRecursion(arr, idx + 1);
}

printArrayWithRecursion([1,2,3,4,5], 0);
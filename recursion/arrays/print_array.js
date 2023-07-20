const printArray = (arr, idx) => {
    // Base
    if (arr.length == idx) {
        return;
    }
    // Recursion
    console.log(arr[idx]);
    printArray(arr, idx + 1);
}

printArray([1, 2, 3, 4, 5], 0);
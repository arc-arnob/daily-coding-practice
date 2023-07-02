const printAllOccurences = (arr, idx, x) => {
    if (arr.length == idx) {
        return;
    }

    if (arr[idx] == x) {
        console.log(idx);
    }

    printAllOccurences(arr, idx + 1, x);


}


printAllOccurences([15, 11, 40, 4, 4, 9], 0, 4);

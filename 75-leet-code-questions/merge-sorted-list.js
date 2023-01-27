/**
 * 
 * You are given the heads of two sorted lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 */

const mergeSortedList = (arr1, arr2) => {
    // [1,4,6,9] // [2,3,4,5]
    const mergedArray = [];
    let i;
    let j;
    for (i = 0, j = 0; i < arr1.length && j < arr2.length;) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

console.log(mergeSortedList([1, 2, 4], [1, 3, 4]));

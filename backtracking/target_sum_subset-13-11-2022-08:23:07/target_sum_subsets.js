const targetSumSubset = (array, index, subSet, sumOfSebset, target) => {
    if(index === array.length) return;
    if(sumOfSebset === target) {
        console.log(subSet);
        return;
    }
    if(sumOfSebset > target) return;

    targetSumSubset(array, index + 1, subSet  + array[index] + ",", sumOfSebset + array[index], target);
    targetSumSubset(array, index + 1, subSet, sumOfSebset, target);
}

targetSumSubset([10,20,30,40,50,60], 0, "", 0, 70);
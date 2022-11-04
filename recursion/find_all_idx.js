const findAllIdxs = (arr, idx, ele, idxArr) => {
    if( idx === arr.length){
        return idxArr;
    }

    if(arr[idx] === ele){
        idxArr.push(idx);
        return findAllIdxs(arr, idx+1, ele, idxArr);
    }
    return findAllIdxs(arr, idx+1, ele, idxArr);
}

console.log(findAllIdxs([1,2,2,2,4,56,2,2,123], 0, 123, []));
const get_stair_paths = (n) => {
    // Base case
    if(n <= 0) {
       if(n == 0) return [""];
       return [];
    }

    const res1 = get_stair_paths(n-1);
    const res2 = get_stair_paths(n-2);
    const res3 = get_stair_paths(n-3);
    const result = [];
    for(i in res1){
        result.push(1 + res1[i])
    }
    for(i in res2){
        result.push(2 + res2[i])
    }
    for(i in res3){
        result.push(3 + res3[i])
    }

    return result;
}

console.log("Get all paths: ", get_stair_paths(3));
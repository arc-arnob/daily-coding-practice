const printStairCases = (numberOfStairs, ans) => {
    if(numberOfStairs <= 0 ){
        if(numberOfStairs === 0) console.log(ans);
        return;
    }
    printStairCases(numberOfStairs-1, 1 + ans);
    printStairCases(numberOfStairs-2, 2 + ans);
    printStairCases(numberOfStairs-3, 3 + ans);

}

printStairCases(4, "");
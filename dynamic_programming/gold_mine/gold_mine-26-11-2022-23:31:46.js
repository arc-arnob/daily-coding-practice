/**
 * 
 * 1. You are given a number n, representing the number of rows.
2. You are given a number m, representing the number of columns.
3. You are given n*m numbers, representing elements of 2d array a, which represents a gold mine.
4. You are standing in front of left wall and are supposed to dig to the right wall. You can start from 
     any row in the left wall.
5. You are allowed to move 1 cell right-up (d1), 1 cell right (d2) or 1 cell right-down(d3).
 */

const goldMine = (inputArray, n) => {
    const memoTable = new Array();
    for(let i=0; i<n; i++){
        memoTable[i] = new Array(n).fill(-1);
    };
    // Last Cell will the cost itself;
    for(let i = 0; i < n; i++){
        memoTable[i][n-1] = inputArray[i][n-1];
    }

    for(let i = n-1; i >= 0; i--){
        for(let j = n-2; j >= 0; j--){
            if(i === n-1) memoTable[i][j] = inputArray[i][j] + Math.max(memoTable[i-1][j+1], memoTable[i][j + 1]);
            else if( i === 0)  memoTable[i][j] = inputArray[i][j] + Math.max(memoTable[i+1][j+1], memoTable[i][j + 1]);
            else  memoTable[i][j] = inputArray[i][j] + Math.max(memoTable[i-1][j+1], memoTable[i][j + 1], memoTable[i+1][j+1]);
        }
    }
    console.log(memoTable);
}

goldMine([[0,1,4,2,8,2],[4,3,6,5,0,4],[1,2,4,1,4,6],[2,0,7,3,2,2],[3,1,5,9,2,4],[2,7,0,8,5,1]],6);

// [[0,1,4,2,8,2],[4,3,6,5,0,4],[1,2,4,1,4,6],[2,0,7,3,2,2],[3,1,5,9,2,4],[2,7,0,8,5,1]]
/**
 * 1. You are given a number n, representing the number of rows.
2. You are given a number m, representing the number of columns.
3. You are given n*m numbers, representing elements of 2d array a, which represents a maze.
4. You are standing in top-left cell and are required to move to bottom-right cell.
5. You are allowed to move 1 cell right (h move) or 1 cell down (v move) in 1 motion.
6. Each cell has a value that will have to be paid to enter that cell (even for the top-left and bottom- 
     right cell).
7. You are required to traverse through the matrix and print the cost of path which is least costly.
 */

// Algo:
/**
 * 1. Assign Memory -> 2d Array
 * 2. decide meaning of the memory -> the cell will hold the minimum cost to that
 * 
 */
const findMinimumMazeTravel = (inputArray, n) => {
     // Arrow Function vs normal function...
     const memoTable = Array(n).fill(Array(n).fill(-1));
     // Cost of most last cell is the cost of the cell it self;
     memoTable[n-1][n-1] = inputArray[n-1][n-1]; // Smallest Problem...
     for(let i = n-1; i >= 0; i--){
          for(let j = n-2; j >= 0; j--){
               if(i === n - 1) memoTable[i][j] = inputArray[i][j] + memoTable[i][j + 1];
               else memoTable[i][j] = inputArray[i][j] + Math.min(memoTable[i][j + 1], memoTable[i+1][j]);
          }
     }
     console.log(memoTable);
};


findMinimumMazeTravel( [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] , 4);

/**  [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] 
 * */

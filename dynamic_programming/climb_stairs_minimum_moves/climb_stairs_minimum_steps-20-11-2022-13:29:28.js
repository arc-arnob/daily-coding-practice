/**
 * 1. You are given a number n, representing the number of stairs in a staircase.
2. You are on the 0th step and are required to climb to the top.
3. You are given n numbers, where ith element's value represents - till how far from the step you 
     could jump to in a single move.  You can of-course fewer number of steps in the move.
4. You are required to print the number of minimum moves in which you can reach the top of 
     staircase.
Note -> If there is no path through the staircase print null.
 */
const findMinimumPath = (jumpsAllowedArray) => {
    const n = jumpsAllowedArray.length;
    const tabulator = Array(jumpsAllowedArray.length + 1).fill(null);
    tabulator[jumpsAllowedArray.length] = 0;
    
    for(let i = n-1; i >= 0; i--){
        if(jumpsAllowedArray[i] > 0){
            let minCost =  Number.MAX_VALUE;
            for(let j = 1; j <= jumpsAllowedArray[i] && i + j < tabulator.length; j++){
                if(tabulator[i + j] !== null) {
                    minCost = Math.min(minCost, tabulator[i + j]);
                }

                
                if(minCost !== Number.MAX_VALUE ) tabulator[i] = minCost + 1;
            }
        }
    }
    console.log(tabulator[0]);
}
findMinimumPath([1,1,1,1,1,1,1])
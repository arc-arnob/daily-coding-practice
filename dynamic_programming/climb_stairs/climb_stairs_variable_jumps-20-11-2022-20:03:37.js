/**
 * 1. You are given a number n, representing the number of stairs in a staircase.
2. You are on the 0th step and are required to climb to the top.
3. You are given n numbers, where ith element's value represents - till how far from the step you 
     could jump to in a single move.  
     You can of course jump fewer number of steps in the move.
4. You are required to print the number of different paths via which you can climb to the top.
 */

const findNumberOfPaths = (jumpsAllowed) => {
    const n = jumpsAllowed.length;
    const tabulator = Array(n+1).fill(0);
    tabulator[n] = 1;
    for(let i = n-1; i >= 0; i--){
        if(jumpsAllowed[i] > 0){
            for(let j = 1; j <= jumpsAllowed[i] && i + j < tabulator.length; j++){
                tabulator[i] += tabulator[i + j];
            }
        }
    }
    console.log(tabulator[0]);
}

findNumberOfPaths([3,3,0,2,1,2,4,2,0,0])
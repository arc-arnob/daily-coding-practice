const climbStairs = (n) => {
   // To start with:
   /**
    * 1. Assign the memory
    * 2. Decide what each memory location will determine
    */
   // Explanation:
   /**
    * Say you have 6 stairs to climb
    * n = 6
    * Jumps allowed: 1, 2 or 3
    * define Array: [0,0,0,0,0,0]
    * Number of ways of standing on starting Stair is 1, therefore: [1,0,0,0,0,0]
    * Number of ways climbing first stair is 1: [1,1,0,0,0,0]
    * Each idx will represent number of ways to get to that stair from 1st stair
    */
   let waysCountArray = Array(n+1).fill(0);
   waysCountArray[0] = 1;
   waysCountArray[1] = 1;
   for(let i = 2; i <=n; i++){
    if(i >= 1){
        waysCountArray[i] += waysCountArray[i-1]
    }
    if(i >=2){
        waysCountArray[i] += waysCountArray[i-2]
    }
    if(i >=3){
        waysCountArray[i] += waysCountArray[i-3]
    }
   }    

   console.log(waysCountArray[n])
}

climbStairs(3);
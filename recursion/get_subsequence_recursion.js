class Solution {
    getAllSubsequence(str) {

        /**
         * Expectation:
         * f(abc): '', a, b, c, ab, bc, ca, abc
         * Here at each recursion level each element
         * can decide to join the subset or not
         */
        console.log("Started: ", str);
        // Base Case
        if(str.length === 0) {
            let baseCaseResult = [];
            baseCaseResult.push[""]; // not pushing, why?
            console.log("base case length: ", baseCaseResult.length) // this return 0, why?
            return [""];

        }

        // get the first element in consideration
        const ch = str[0];
        // get the reamining string
        const remainingString = str.substring(1);
        const recursion_result = this.getAllSubsequence(remainingString);
        const result = [];

        for(let i in recursion_result){
            result.push(recursion_result[i]);
        }

        for(let i in recursion_result){
            result.push( ch + recursion_result[i]);
        }
        return result;        

    }
}

const getSS = new Solution();

console.log(getSS.getAllSubsequence('abc'));
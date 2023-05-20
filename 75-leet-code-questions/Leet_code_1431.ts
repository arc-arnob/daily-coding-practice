
/**
 * There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    /**
    
        [2, 3, 5, 1, 3], 3 -> 5
        [5, 6, 8, 4, 6]	
    
        Brute Force:
        1. Add Extra candies to each array element and compare to all the others.
        2. TIme: O(n^2)

        O(N) -> Max;
        O(N) -> Traverse, while checking if candies[i] + extraCandies >= max. if yes push true, else push false 
*/
    const result = []; // O(N) space
    const currentMaxCandies = Math.max(...candies);
    candies.forEach(ele => {
        if (ele + extraCandies >= currentMaxCandies) result.push(true);
        else result.push(false);
    });
    return result;

};
/**
 * A Prime number is a natural number greater than 1 that is divisible only 
 * by itself and 1, such as 2,3,5....
You are asked to implement isPrime() to check if a number is prime.

Follow-up
What is the time cost of your implementation ? can you improve your approach to have the fewest comparisons?

 */


const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(4));
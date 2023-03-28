/*-----------------------------------------------------------------
Challenge: 21-primeFactors
Difficulty: Intermediate
Prompt:
Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
- Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.
Examples:
primeFactors(2) //=> [2]
primeFactors(3) //=> [3]
primeFactors(4) //=> [2, 2]
primeFactors(18) //=> [2, 3, 3]
primeFactors(29) //=> [29]
primeFactors(105) //=> [3, 5, 7]
primeFactors(200) //=> [2, 2, 2, 5, 5]
Hint: Code a nested isPrime(n) helper function that returns true if n is prime, otherwise it returns false
-----------------------------------------------------------------*/
// Your solution for 21-primeFactors here: 
function primeFactors(num){
    let factors = [];
    if(num > 1){
        for(let i = 2; i <= num; i++){
            while (num % i === 0){
                factors.push(i);
                num /= i;

            }
        }
        return factors;
    }else{
        let empty = []
        return empty
    }

}

console.log(primeFactors(2)); // Output: [2]
console.log(primeFactors(3)); // Output: [3]
console.log(primeFactors(4)); // Output: [2, 2]
console.log(primeFactors(18)); // Output: [2, 3, 3]
console.log(primeFactors(29)); // Output: [29]
console.log(primeFactors(105)); // Output: [3, 5, 7]
console.log(primeFactors(200)); // Output: [2, 2, 2, 5, 5]
console.log(primeFactors(1));
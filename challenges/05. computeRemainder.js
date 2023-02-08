/*-----------------------------------------------------------------
Challenge: 05-computeRemainder
Difficulty: Basic
Prompt:
- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend and the second argument should be the divisor.
- If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.
Examples:
computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

/*--- Not using the modulus operator ---*/
function computeRemainder(dividend, divisor) {
    if (divisor === 0) return Infinity;
    return dividend - (Math.floor(dividend / divisor) * divisor);
}

/*--- Using the modulus operator ---*/
// function computeRemainder(dividend, divisor) {
//   if (divisor === 0) return Infinity;
//   return dividend % divisor;
// }
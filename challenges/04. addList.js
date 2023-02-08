/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1, 50, 1.23) //=> 52.23
add(7, -12) //=> -5

Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

/*--- BEST SOLUTION:  Use rest paramater syntax (ES2015) then reduce ---*/
// function addList(...nums) {
//   // nums will be an array containing all arguments 
//   return nums.reduce((sum, num) => sum + num, 0);
// }


/*--- using the arguments keyword (array-like object) and a for loop ---*/
function addList() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

/*--- make arguments a true array then forEach ---*/
// function addList() {
//   let nums = Array.from(arguments);
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }
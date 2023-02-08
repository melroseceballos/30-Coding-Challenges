/*-----------------------------------------------------------------
Challenge: 19-flatten
Difficulty:  Intermediate
Prompt:
- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.
Hint:
- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
Examples:
flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array)
flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution for 19-flatten here:

/*--- Using recursion ---*/
function flatten(arr) {
    let flatArr = [];
    arr.forEach(function (elem) {
        // use the Array.isArray static method to test if an array
        if (Array.isArray(elem)) {
            // recursion coming up!
            flatArr = flatArr.concat(flatten(elem));
        } else {
            flatArr.push(elem);
        }
    });
    return flatArr;
}

/*--- Using the fresh Array.prototype.flat method ---*/
// function flatten(arr) {
//   // The 99 is a depth factor
//   return arr.flat(99);
// }
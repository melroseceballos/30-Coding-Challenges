/*-----------------------------------------------------------------
Challenge: 12-hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

/*--- convert one string to array and reduce ---*/
// function hammingDistance(s1, s2) {
//   if (s1.length !== s2.length) return NaN;
//   s1.split('').reduce(function(count, char, idx) {
//     return char !== s2.charAt(idx) ? count + 1 : count;
//   }, 0);
// }

function hammingDistance(s1, s2) {
    if (s1.length !== s2.length) return NaN;
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) count++;
    }
    return count;
}
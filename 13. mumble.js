/*-----------------------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // the ((i || '') && '-') only adds a dash if it's not the first iteration
        result += ((i || '') && '-') + str.charAt(i).repeat(i + 1);
    }
    return result;
}

/*--- convert to array and use reduce (break that one-liner down!) ---*/
// function mumble(str) {
//   return str.split('').reduce((result, c, i) => result + ((i || '') && '-') + c.repeat(i + 1), '');
// }
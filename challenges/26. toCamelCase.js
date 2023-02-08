/*-----------------------------------------------------------------
Challenge: 26-toCamelCase
Difficulty:  Intermediate
Prompt:
- Write a function called toCamelCase that accepts a single string as argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
Hints:
- This is a great challenge for using regular expressions combined with the String.replace method.
Examples:
toCamelCase( 'wdi-rocks' ) // => 'wdiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

function toCamelCase(str) {
    return str.replace(/[_-]\w/g, function (match) {
        return match.charAt(1).toUpperCase();
    });
}

/* Take advantage of the implicit return of an arrow function for a one-line solution */
// function toCamelCase(str) {
//   return str.replace(/[_-]\w/g, match => match.charAt(1).toUpperCase());
// }
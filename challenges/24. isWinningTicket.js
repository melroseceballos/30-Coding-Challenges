/*-----------------------------------------------------------------
Challenge: 24-isWinningTicket
Difficulty:  Intermediate
Prompt:
- Write a function called isWinningTicket that accepts a single array an as argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.
Hints:
- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.
Examples:
isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:
function isWinningTicket(ticket) {
    for (let i = 0; i < ticket.length; i++) {
      const [str, num] = ticket[i];
      let found = false;
      for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) === num) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }
  
console.log(isWinningTicket( [ ['ABC', 65] ] )) // => true
console.log(isWinningTicket( [ ['ABC', 999], ['XY', 89] ] )) // => false
console.log(isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] )) // => true
console.log(isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] )) // => false
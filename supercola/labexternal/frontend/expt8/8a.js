// 8, a.Write a JavaScript program which accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHEqUICKbROWNfOX'.
function swapCase(inputString) {
  return inputString.replace(/[a-zA-Z]/g, function(char) {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  });
}

// Example usage:
const inputString = 'The Quick Brown Fox';
const swappedString = swapCase(inputString);

console.log(`Original String: ${inputString}`);
console.log(`Swapped String: ${swappedString}`);

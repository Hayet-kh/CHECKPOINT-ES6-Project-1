// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Returns a string with each character repeated twice, preserving case.
const doubleChar = (str) => str.split("").map((ele)=> ele+ele).join("");

// OR
//const doubleChar = str => str.split('').map(char => char.repeat(2)).join('');

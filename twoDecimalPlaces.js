// https://www.codewars.com/kata/5641a03210e973055a00000d

// Create a function that returns a number with two decimal places
const twoDecimalPlaces = (n) => Math.round(n * 100) / 100;

// Other solution
// const twoDecimalPlaces = (n) => +n.toFixed(2);

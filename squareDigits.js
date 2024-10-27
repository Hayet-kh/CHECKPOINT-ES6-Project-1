// https://www.codewars.com/kata/546e2562b03326a88e000020

// Return the number provided as a parameter, but with each digit's square
const squareDigits = (num) => Number(('' + num).split('').map(function (val) { return val * val;}).join(''));    

// https://www.codewars.com/kata/5715eaedb436cf5606000381

// Return the sum of all positive numbers in the array
const positiveSum =(arr) => arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);

// https://www.codewars.com/kata/5264d2b162488dc400000001

// Return the string with all words of 5 or more letters reversed
const spinWords = (string) => string.split(" ").map(ele => ele.length < 5 ? ele : ele.split("").reverse().join("") ).join(" ");

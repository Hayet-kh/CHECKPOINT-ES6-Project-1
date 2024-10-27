// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Return true if the given string is an isogram, false otherwise.
const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length;

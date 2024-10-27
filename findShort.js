// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Return the length of the shortest word in the input string
const findShort = (s) =>Math.min(...s.split(" ").map (s => s.length));

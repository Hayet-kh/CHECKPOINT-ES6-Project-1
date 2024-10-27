// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Return the number of sheep present in the array
const countSheep = (num) =>
	Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("");

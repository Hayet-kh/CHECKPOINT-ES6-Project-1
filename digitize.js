// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Return the number with two decimal places
const digitize = (n) =>
	n
		.toString()
		.split("")
		.reverse()
		.map((ele) => +ele);

// https://www.codewars.com/kata/554b4ac871d6813a03000035

// Return the highest and lowest number
const highAndLow = (numbers) => {
	const nums = numbers.split(" ").map(Number);
	return `${Math.max(...nums)} ${Math.min(...nums)}`;
};

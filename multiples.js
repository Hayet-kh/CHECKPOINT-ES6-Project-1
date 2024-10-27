// https://www.codewars.com/kata/514b92a657cdc65150000006

// Create a function that returns the sum of all multiples of 3 and 5 that are less than the number passed in.
const solution = (number) =>
	Array.from({ length: number - 1 }, (_, i) => i + 1)
		.filter((i) => i % 3 === 0 || i % 5 === 0)
		.reduce((acc, ele) => acc + ele, 0);

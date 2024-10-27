// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Returns the sum of the two smallest numbers in an array.
const sumTwoSmallestNumbers = (numbers) =>
	numbers
		.sort((a, b) => a - b)
		.slice(0, 2)
		.reduce((a, b) => a + b, 0);

// OR
// function sumTwoSmallestNumbers(numbers){
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];
// };

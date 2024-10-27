// Moves all zeros in the array to the end, preserving the order of non-zero elements.
const moveZeros = (arr) => [
	...arr.filter((num) => num !== 0),
	...arr.filter((num) => num === 0),
];

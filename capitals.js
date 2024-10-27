// https://www.codewars.com/kata/539ee3b6757843632d00026b

// Return an array of index of the capital letters in the string
const capitals = (word) =>
	[...word]
		.map((char, i) => (char === char.toUpperCase() ? i : -1))
		.filter((i) => i !== -1);

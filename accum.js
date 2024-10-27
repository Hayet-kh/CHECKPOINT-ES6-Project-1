// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Return the output string
// The string should be in the following format: 'A-Bb-Ccc-Dddd-...'
const accum = (s) =>
	s
		.split("")
		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
		.join("-");

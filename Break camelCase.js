//https://www.codewars.com/kata/5208f99aee097e6552000148

// Return a string with a space between each word with the first letter capitalized
const solution = (string) => string.replace(/([A-Z])/g, " $1");

// Another solution
// solution = (str) =>
// 	str
// 		.split("")
// 		.map((el) => (el === el.toUpperCase() && el.match(/[A-Z]/) ? " " + el : el))
// 		.join("");

console.log(solution("camelCasing")); // camel Casing

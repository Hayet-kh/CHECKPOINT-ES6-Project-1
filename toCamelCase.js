// Return the camelCase version of the string
toCamelCase = (str) =>
	str.replace(/[-_ ]\w/gi, (el) => el.charAt(1).toUpperCase());

// Another way to solve the problem
// toCamelCase = (str) =>
// 	str
// 		.split(/[-_ ]\w/gi)
// 		.map((el, index) =>
// 			index === 0 ? el : el.charAt(0).toUpperCase() + el.slice(1)
// 		)
// 		.join("");

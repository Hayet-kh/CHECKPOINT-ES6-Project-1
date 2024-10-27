//https://www.codewars.com/kata/55908aad6620c066bc00002a

// Return if the amount of 'x's and 'o's is the same
const XO = (str) =>
	str.split(/[x]/i).length - 1 == str.split(/[o]/i).length - 1;

// Another solution
// XO = (str) => (
// 		(str.match(/x/gi) && str.match(/x/gi).length) ===
// 		(str.match(/o/gi) && str.match(/o/gi).length)
// 	)

// Return the number in descending order
descendingOrder = (n) =>
	parseInt(String(n).split("").sort().reverse().join(""));

// Other solution
//  descendingOrder = (n) => Number(
// 		String(n)
// 			.split("")
// 			.sort((a, b) => b - a)
// 			.join("")
// 	);

//https://www.codewars.com/kata/5412509bd436bd33920011bc

// Return masked string
const maskify = (cc) =>
	[...cc].map((char, i) => (i < cc.length - 4 ? "#" : char)).join("");

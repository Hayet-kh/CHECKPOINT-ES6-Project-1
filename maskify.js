// Return masked string
maskify = (cc) =>
	[...cc].map((char, i) => (i < cc.length - 4 ? "#" : char)).join("");

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// Return the complementary DNA string.
const DNAStrand = (dna) =>
	dna
		.split("")
		.map((v) => ({ A: "T", T: "A", C: "G", G: "C" }[v]))
		.join("");

// https://www.codewars.com/kata/53af2b8861023f1d88000832

// Create a function which answers the question "Are you playing banjo?".
const areYouPlayingBanjo = (name) =>
	name +
	(name[0].toUpperCase() === "R" ? " plays banjo" : " does not play banjo");

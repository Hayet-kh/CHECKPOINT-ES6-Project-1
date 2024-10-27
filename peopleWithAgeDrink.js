// https://www.codewars.com/kata/56170e844da7c6f647000063

// Return the drink name according to the age
const peopleWithAgeDrink = (old) =>
	old < 14
		? "drink toddy"
		: old < 18
		? "drink coke"
		: old < 21
		? "drink beer"
		: "drink whisky";

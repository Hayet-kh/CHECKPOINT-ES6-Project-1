// Return if the number is a narcissistic number
const narcissistic = (value) =>
	typeof value === "number"
		? value
				.toString()
				.split("")
				.reduce(
					(acc, curr) => acc + Math.pow(curr, value.toString().length),
					0
				) === value
		: "invalid inputs";

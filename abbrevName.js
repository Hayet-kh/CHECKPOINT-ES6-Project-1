// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Return the abbreviation of a two word name
const abbrevName = (name)=>name.toUpperCase().split(" ")[0][0]+"."+name.toUpperCase().split(" ")[1][0];
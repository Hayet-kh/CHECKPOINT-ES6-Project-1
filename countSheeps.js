// https://www.codewars.com/kata/54edbc7200b811e956000556

// Return the number of sheep present in the array
const countSheeps = arrayOfSheep => arrayOfSheep.reduce((count, el) => count + (el ? 1 : 0), 0);

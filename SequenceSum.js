// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

// Return the sum of the sequence of numbers.
const SequenceSum = (() => {
	const showSequence = (count) =>
		count > 0
			? Array.from({ length: count + 1 }, (_, i) => i).join("+") +
			  ` = ${(count * (count + 1)) / 2}`
			: count === 0
			? "0=0"
			: `${count}<0`;
	return { showSequence };
})();

// Another way to solve the problem
// var SequenceSum = (function() {
//     function SequenceSum() {}
//     SequenceSum.showSequence = function(count) {
//       if(count > 0){
//         let str="";
//         let sum=0;
//         for(let i=0; i<=count; i++){
//           sum+=i;
//           str += (i!=count ? `${i}+` : `${i} = ${sum}`);
//         }
//         return str;
//       }else if (count == 0) return "0=0";
//       else return `${count}<0`;
//     };
//     return SequenceSum;
// })();

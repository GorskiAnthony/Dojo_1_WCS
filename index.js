/**
 * Consignes
 *
 * Dojo : FizzBuzz
 * affiche "fizz" si multiple de 3.
 * affiche "buzz" si multiple de 5
 * affiche "fizzbuzz" si c'est en même temps un multiple de 3 et 5
 *
 * Sans prompt
 *
 */

// function dojo(number) {
// 	if (number % 3 === 0 && number % 5 === 0) {
// 		return "fizzbuzz";
// 	} else if (number % 5 === 0) {
// 		return "BUZZ";
// 	} else if (number % 3 === 0) {
// 		return "fizz";
// 	} else {
// 		return number;
// 	}
// }

// console.log(dojo(7));
// console.log(dojo(15));
// console.log(dojo(9));
// console.log(dojo(5));

function dojo(number) {
	switch (true) {
		case number % 3 === 0 && number % 5 === 0:
			return "fizzbuzz";
		case number % 3 === 0:
			return "fizz";
		case number % 5 === 0:
			return "buzz";
		default:
			return "invalid";
	}
}

console.log(dojo("a"));
console.log(dojo(3));
console.log(dojo(15));

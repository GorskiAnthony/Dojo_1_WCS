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

/**
 * En mode function
 */

// function fizzbuzz(multiples) {
// 	if (multiples % 3 === 0 && multiples % 5 === 0) {
// 		return "fizzbuzz";
// 	} else if (multiples % 3 === 0) {
// 		return "fizz";
// 	} else if (multiples % 5 === 0) {
// 		return "buzz";
// 	} else {
// 		return "Aucune des 3 réponses ";
// 	}
// }

// console.log(fizzbuzz(4));
// console.log(fizzbuzz(20));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(552145215));

/**
 * En mode Switch / Case
 */

const multiples = 15;

switch (true) {
	case multiples % 3 === 0 && multiples % 5 === 0:
		console.log("fizzbuzz");
		break;
	case multiples % 3 === 0:
		console.log("fizz");
		break;
	case multiples % 5 === 0:
		console.log("buzz");
		break;
	default:
		console.log("Aucune des 3 réponses");
}

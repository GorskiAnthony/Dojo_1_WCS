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

//Prompt pour récupérer un chiffre de l'utilisateur
// => let num
//if multiple de 3
//else multiple de 5
// multiple de 3 et de 5

/*
const num =parseInt (prompt("Select a number"));

switch(true){
    case (num % 3 === 0 && num % 5 === 0):
        console.log("fizzbuz");
        break;
    case (num % 3 === 0):
        console.log("fizz");
        break;
    case (num % 5 ===0):
        console.log("buzz");
        break;
    default:
        console.log("Ni multiple de 3 ni multiple de 5");
}
*/

const fizzBuzz = (num) => {
	if (num % 3 === 0 && num % 5 === 0) {
		return "fizzBuzz";
	} else if (num % 3 === 0) {
		return "fizz";
	} else if (num % 5 === 0) {
		return "buzz";
	} else return num;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(1));
console.log(fizzBuzz(7));
console.log(fizzBuzz(9));
console.log(fizzBuzz(122545));
console.log(fizzBuzz("a"));

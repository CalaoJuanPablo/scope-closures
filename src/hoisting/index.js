a = 2
var a
console.log(a) // 2
/*
	This is what happens:
	var a
	a = 2
	console.log(a) // 2
*/

console.log(a) // undefined
var a = 2
/*
	Trying to access the value of a.
	Hoisting is just for declaration,
	not for assignation
*/

nameOfDog('Elmo') // Elmo
function nameOfDog(name) {
	console.log(name)
}

/*
	Same hoisting logic happens here
*/
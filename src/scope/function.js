function fruits() {
	var fruit = 'apple'
	console.log(fruit)
}

fruits() // apple
console.log(fruit) //ReferenceError

function anotherFunction() {
	var x = 1
	var x = 2
	let y = 1
	let y = 2
	console.log(x)
	console.log(y) // SyntaxError. N se puede redeclarar valor
}

anotherFunction()
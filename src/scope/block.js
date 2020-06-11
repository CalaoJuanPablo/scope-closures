function fruits() {
	if (true) {
		var fruits1 = 'apple' // apple. Function Scope.
		let fruits2 = 'banana' // ReferenceError. Block Scope
		const fruits3 = 'kiwi' // ReferenceError. Block Scope
	}

	console.log(fruits1)
	console.log(fruits2)
	console.log(fruits3)
}

fruits()

let x = 1
{
	let x = 2
	console.log(x) // 2 BlockScope
}
console.log(x) // 1 BlockScope

var x = 1
{
	var x = 2
	console.log(x) // 2 GlobalScope
}
console.log(x) // 2 GlobalScope

function anotherFunction() {
	for (var i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i) // 10 10 10 ... Function Scope
		}, 1000)
	}
}

anotherFunction()

function anotherFunction2() {
	for (let i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i) // 1 2 3 ... Block Scope
		}, 1000)
	}
}

anotherFunction2()
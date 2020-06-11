function helloWorld() {
	const hello = "Hello World"
	console.log(hello)
}

helloWorld() // Hello World

console.log(hello) // ReferenceError

var scope = "I am global"

function functionScope() {
	var scope = "I am local"
	function func() {
		return scope
	}

	console.log(func())
}
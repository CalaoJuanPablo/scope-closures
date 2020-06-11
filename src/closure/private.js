function person() {
	var savedName = "Name"

	return {
		getName: function() {
			return savedName
		},
		setName: function(name) {
			savedName = name
		}
	}
}

newPerson = person()
console.log(newPerson.getName()) // Name

newPerson.setName('Juan')
console.log(newPerson.getName()) // Juan
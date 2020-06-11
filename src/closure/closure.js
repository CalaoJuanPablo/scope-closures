function moneyBox(coins) {
	var saveCoins = 0
	saveCoins += coins

	console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5) // $5
moneyBox(10) // $10

function moneyBoxClosure() {
	var saveCoins = 0

	function countCoins(coins) {
		saveCoins += coins
		console.log(`MoneyBox: $${saveCoins}`)
	}

	return countCoins
}

let myMoneyBox = moneyBoxClosure()

myMoneyBox(4) // $4
myMoneyBox(6) // $10
myMoneyBox(10) // $20
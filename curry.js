// add(2, 3)
// addCurried(2)(3)

const addTwo = addCurried(2)

const addTwoB = function (a) {
	return add(a, 2)
}

function add(a, b) {
	return a + b
}
function addCurried(a) {
	return function (b) {
		add(a, b)
	}
}

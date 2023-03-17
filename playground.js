const objs = [
	{
		name: 'peppercorn',
		age: 9,
	},
	{
		name: 'willa',
		age: 10,
	},
]
function changeAge(animal) {
	const localAnimal = { ...animal }
	localAnimal.age = 11
	return localAnimal
}

console.log(objs)
console.log(objs.map(changeAge))
console.log(objs)

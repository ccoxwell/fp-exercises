/*
people = [{'name': 'Mary', 'height': 160},
    {'name': 'Isla', 'height': 80},
    {'name': 'Sam'}]

height_total = 0
height_count = 0
for person in people:
    if 'height' in person:
        height_total += person['height']
        height_count += 1

if height_count > 0:
    average_height = height_total / height_count

    print average_height
    # => 120
*/

// find average height of people
// can only include person if height property exists, so can't use length of original array

const people = [
	{ name: 'Mary', height: 160 },
	{ name: 'Isla', height: 80 },
	{ name: 'Sam' },
]

// const peopleWithHeight = people.filter((person) => person.height)
const peopleWithHeight = people.filter((person) => 'height' in person)

const heights = peopleWithHeight.map((person) => person.height)

const heightTotal = heights.reduce((total, current) => total + current, 0)

const peopleWithHeightCount = peopleWithHeight.length

// const averageHeight = heightTotal / peopleWithHeightCount

const averageHeight =
	peopleWithHeightCount > 0
		? heightTotal / peopleWithHeightCount
		: 'No one has a height!'

console.log(averageHeight)

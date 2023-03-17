/*

bands = [{'name': 'sunset rubdown', 'country': 'UK', 'active': False},
         {'name': 'women', 'country': 'Germany', 'active': False},
         {'name': 'a silver mt. zion', 'country': 'Spain', 'active': True}]

def format_bands(bands):
    for band in bands:
        band['country'] = 'Canada'
        band['name'] = band['name'].replace('.', '')
        band['name'] = band['name'].title()

format_bands(bands)

print bands
# => [{'name': 'Sunset Rubdown', 'active': False, 'country': 'Canada'},
#     {'name': 'Women', 'active': False, 'country': 'Canada' },
#     {'name': 'A Silver Mt Zion', 'active': True, 'country': 'Canada'}]

print pipeline_each(bands, [set_canada_as_country,
                            strip_punctuation_from_name,
                            capitalize_names])

*/

const bands = [
	{ name: 'sunset rubdown', country: 'UK', active: false },
	{ name: 'women', country: 'Germany', active: false },
	{ name: 'a silver mt. zion', country: 'Spain', active: true },
]

console.log(
	pipelineEach(bands, [
		setCanadaAsCountry,
		stripPunctuationFromName,
		capitalizeNames,
	])
)

function pipelineEach(data, functionsArray) {
	return functionsArray.reduce((accumulator, currentFunction) => {
		accumulator = currentFunction(accumulator)
		return accumulator
	}, data)
}

function setCanadaAsCountry(array) {
	return array.map((item) => {
		item.country = 'Canada'
		return item
	})
}

function stripPunctuationFromName(array) {
	return array.map((item) => {
		item.name.replace('.', '')
		return item
	})
}

function capitalizeNames(array) {
	return array.map((item) => {
		item.name = titleCaseName(item.name)
		return item
	})
}

function titleCaseName(string) {
	const words = string.split(' ')
	const titleCasedString = words.reduce((accumulator, currentWord) => {
		const [first, ...rest] = currentWord
		const firstCapitalized = first.toUpperCase()
		const restLowerCase = rest.join('')
		return accumulator
			.concat(' ', `${firstCapitalized}${restLowerCase}`)
			.trimStart()
	}, '')
	return titleCasedString
}

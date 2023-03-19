const bands = init()

console.log(
	pipelineEach(bands, [
		setCanadaAsCountry,
		stripPunctuationFromName,
		capitalizeNames,
	])
)

function pipelineEach(data, functionsArray) {
	return functionsArray.reduce(
		(accumulator, currentFunction) =>
			accumulator.map((item) => currentFunction(item)),
		data
	)
}

function setCanadaAsCountry(band) {
	return { ...band, country: 'Canada' }
}

function stripPunctuationFromName(band) {
	const { name } = band
	return { ...band, name: name.replace('.', '') }
}

function capitalizeNames(band) {
	const { name } = band
	return { ...band, name: name.toTitleCase() }
}

function init() {
	String.prototype.toTitleCase = function () {
		return this.split(' ')
			.map((word) => {
				const [first, ...rest] = word
				return `${first.toUpperCase()}${rest.join('')}`
			})
			.join(' ')
	}
	return [
		{ name: 'sunset rubdown', country: 'UK', active: false },
		{ name: 'women', country: 'Germany', active: false },
		{ name: 'a silver mt. zion', country: 'Spain', active: true },
	]
}

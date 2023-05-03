const { bands, utils } = init()

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
	return utils.assignPropertyValue(band, 'country', 'Canada')
}

function stripPunctuationFromName(band) {
	return utils.assignPropertyValue(band, 'name', band.name.replace('.', ''))
}

function capitalizeNames(band) {
	return utils.assignPropertyValue(band, 'name', band.name.toTitleCase())
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
	return {
		bands: [
			{ name: 'sunset rubdown', country: 'UK', active: false },
			{ name: 'women', country: 'Germany', active: false },
			{ name: 'a silver mt. zion', country: 'Spain', active: true },
		],
		utils: {
			assignPropertyValue: (_object, propertyName, newValue) => {
				const object = { ..._object }
				object[propertyName] = newValue
				return object
			},
		},
	}
}

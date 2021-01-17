
const map = require('./map');

const cube = (n) => {
	return n*n*n;
}

const identity = (n) => {
	return n;
}

describe("Map", () => {

	it("Map([],cube) is []", () => {
		expect(map([], cube)).toEqual([]);
	});

	it("Map([1,2,3],cube) is [1,8,27]", () => {
		expect(map([1,2,3], cube)).toEqual([1,8,27]);
	});

	it("Map([1,2,3], identity) is [1,2,3", () => {
		expect(map([1,2,3], identity)).toEqual([1,2,3]);
	});

})
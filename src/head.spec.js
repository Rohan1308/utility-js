
const head = require('./head')

describe ("Head", () => {

	it("Head of [] is null", () => {
		expect(head([])).toEqual(null);
	});

	it("Head of [1,2,3] is 1", () => {
		expect(head([1,2,3])).toEqual(1);
	});
})
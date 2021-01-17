
const filter = require('./filter');

describe("Filter", () => {

	it("x=>true should return empty array for empty array", () => {
		expect(filter([],x=>true)).toEqual([]);
	});

	it("x=>true should return entire array for non-empty array", () => {
		expect(filter([1,3,10],x=>true)).toEqual([1,3,10]);
	});

	it("x=>false should return empty array for non-empty array", () => {
		expect(filter([1,2,3],x=>false)).toEqual([]);
	});

	it("x=>true should return empty array for empty array", () => {
		expect(filter([],x=>true)).toEqual([]);
	});

	it("x=>x>3 should return array of elements greater than 3", () => {
		expect(filter([1,5,6,2,3],x=>x>3)).toEqual([5,6]);
	});

	it("filterUpperCase should return array of only upperCase elements", () => {
		const filterUpperCase = (alphabet) => {
			return alphabet == alphabet.toUpperCase();
		}
		expect(filter(['a','A','b','Z'],filterUpperCase)).toEqual(['A','Z']);
	});

})
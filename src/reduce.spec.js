
const reduce = require('./reduce');

describe("Reduce", () => {

	it("Empty list with no initial value should reduce to undefined", () => {
		expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
	});

	it("Non-Empty list with no initial value should reduce to sum of elements", () => {
		expect(reduce([1,2,3,-2],(x,y)=>x+y)).toEqual(4);
	});

	it("Empty list with initial value should reduce to initial value", () => {
		expect(reduce([],(x,y)=>x+y,42)).toEqual(42);
	});

	it("Empty list with no initial value should reduce to undefined", () => {
		expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
	});

	it("x+y reducer for non empty character array should return concat", () => {
		expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual("abc");
	});
})

const max = require('./max');

describe('Max', () => {

	it('Max of [] is []', () => {
		expect(max([])).toEqual(undefined);
	});

	it('Max of [1,3,8,5] is 8', () => {
		expect(max([1,3,8,5])).toEqual(8);
	});

})

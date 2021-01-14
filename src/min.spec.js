
const max = require('./min');

describe('Min', () => {

	it('Max of [] is []', () => {
		expect(max([])).toEqual([]);
	});

	it('Max of [1,3,8,5] is 1', () => {
		expect(max([3,1,8,5])).toEqual(1);
	});

})

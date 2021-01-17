
const min = require('./min');

describe('Min', () => {

	it('Min of [] is []', () => {
		expect(min([])).toEqual(undefined);
	});

	it('Min of [1,3,8,5] is 1', () => {
		expect(min([3,1,8,5])).toEqual(1);
	});

})

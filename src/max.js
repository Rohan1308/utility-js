
const reduce = require('./reduce')

const max = (list) => {
	return reduce(list, (x,y) => x > y ? x : y);
}

module.exports = max;



const reduce = require('./reduce')

const min = (list) => {
	return reduce(list, (x,y) => x < y ? x : y);
}

module.exports = min;


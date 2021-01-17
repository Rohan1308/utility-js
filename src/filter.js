
const head = require('./head');
const tail = require('./tail')

const filter = (list, inclusionCriteria) => {
	let result = [];
	return applyFilter(list, inclusionCriteria, result);
}

const applyFilter = (list, inclusionCriteria, result) => {
	if (list.length > 0) {
		if (inclusionCriteria(head(list)))
			result.push(head(list));
		return applyFilter(tail(list), inclusionCriteria, result);
	}

	return result;
}


module.exports = filter;
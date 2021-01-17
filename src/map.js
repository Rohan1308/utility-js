const head = require('./head');
const tail = require('./tail');

const map = (list, functionToBeApplied) => {
	let result = []; 
	return applyFunction(list, functionToBeApplied, result);
}

const applyFunction = (list, functionToBeApplied, result) => {
	if (list.length > 0) {
		result.push(functionToBeApplied(head(list)));
		return applyFunction(tail(list), functionToBeApplied, result);
	}

	return result;
}


module.exports = map;

const tail = require('./tail');
const head = require('./head');

const reduce = (list, operation, inititalValue) => {
	
	if (inititalValue === undefined && list.length == 0)
		return undefined;

	if (inititalValue === undefined)
		return perform(operation, tail(list), head(list)); 
	else
		return perform(operation, list, inititalValue)
}

const perform = (operation, list, accumulator) => {
	if (list.length == 0)
		return accumulator; 
	else 
		return perform(operation, tail(list), operation(accumulator,head(list)));
}


module.exports = reduce; 
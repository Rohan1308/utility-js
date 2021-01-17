
const tail = require('./tail');


const max = (list) => {
	let len = list.length;
	
	if (len == 0) 
		return [];
	
	if (len == 1) 
		return list[0];
	
	let candidate1 = list[0];
	let candidate2 = max(tail(list));
	
	if (candidate1 > candidate2)
		return candidate1;
	
	else
		return candidate2;
}

module.exports = max;


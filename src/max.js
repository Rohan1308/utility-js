
const max = (list) => {
	let len = list.length;
	if (len == 0) {
		return [];
	}

	if (len == 1) {
		return list[0];
	}

	candidate1 = list[0];
	candidate2 = max(list.slice(1,len));
	
	if (candidate1 > candidate2) {
		return candidate1;
	}

	return candidate2;
}

module.exports = max;


const max = (list) => {
	let len = list.length;
	if (len == 0) {
		return [];
	}
	ans = list[0];
	for(let i = 0; i < len; i++) {
		if(list[i] > ans) {
			ans = list[i];
		}
	}

	return ans;
}

module.exports = max;


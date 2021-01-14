
const tail = (list) => {
	let len = list.length;
	if (len == 0) {
		return []
	}
	else {
		return list.slice(1,len);
	}
}


module.exports = tail; 
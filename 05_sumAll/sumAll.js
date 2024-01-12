const sumAll = function(n1, n2) {
	let sum = 0;
	if (!Number.isInteger(n1) || !Number.isInteger(n2))
		return "ERROR";
	if (n1 < 0 || 0 > n2) 
		return "ERROR";
	if (n1 > n2) 
		[n2, n1] = [n1, n2];
	for(; n1 <= n2; n1++)
		sum += n1;
	return sum;

};

// Do not edit below this line
module.exports = sumAll;

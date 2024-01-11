const reverseString = function(str) {
	return str.split("").reduce((acc, char) => char + acc, "");

};

// Do not edit below this line
module.exports = reverseString;

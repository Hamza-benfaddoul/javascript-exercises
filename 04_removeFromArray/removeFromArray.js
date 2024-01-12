const removeFromArray = function(arry, ...args) {
	args.forEach(arg => {
		index = arry.indexOf(arg);
	   if (index > -1) {
		   arry.splice(index, 1);
	   }

   });
   return arry;
};

// Do not edit below this line
module.exports = removeFromArray;

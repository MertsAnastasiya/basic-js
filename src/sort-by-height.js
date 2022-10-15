const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let arrayHeight = []; //sort
	let arrayResult = [];
	let indexHeight = 0;

	for(let i = 0; i < array.length; i++) {
		if(array[i] !== -1) {
			console.log('h');
			arrayHeight.push(array[i]);
		}
	}
	arrayHeight.sort((a, b) => a - b);

	array.forEach((item) => {
		if(item === -1) {
			arrayResult.push(item);
		} else {
			arrayResult.push(arrayHeight[indexHeight]);
			indexHeight++;
		}
	});
return arrayResult;
}

module.exports = {
  sortByHeight
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
	let leftPart = Math.floor(n / 10);
	let rightPart = 0;
	let divider = 1;

	while(1) {
		let value = leftPart * divider + rightPart;
		if(value > max) {
			max = value;
		}
		if(leftPart === 0) break;
		divider = divider * 10;
		leftPart = Math.floor(leftPart / 10);
		rightPart = n % divider;
	}
	return max;
}

module.exports = {
  deleteDigit
};

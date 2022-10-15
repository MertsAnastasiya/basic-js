const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let mapLetters = new Map();
	let result = 0;
	Array.from(s1).forEach(item => {
		if(mapLetters.has(item)) {
			mapLetters.set(item, mapLetters.get(item) + 1);
		} else {
			mapLetters.set(item, 1);
		}
	});

	Array.from(s2).forEach(item => {
		if(mapLetters.has(item) && mapLetters.get(item) > 0) {
			mapLetters.set(item, mapLetters.get(item) - 1);
			result++;
		}
	});
	return result;
}

module.exports = {
  getCommonCharacterCount
};

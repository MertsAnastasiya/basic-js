const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
	let strResult = '';
	let arrayStr = Array.from(str);
	arrayStr.forEach((item, index) => {
    if(item === arrayStr[index + 1]) {
      counter++;
    } else {
			if(counter === 1) {
				strResult += `${item}`;
			} else {
			strResult += `${counter}${item}`;
			}
      counter = 1;
    }
	});

	return strResult;
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let mapDNS = new Map();
	domains.forEach(item => {
		let arrayDNS = item.split('.');
		let str = '';
		for(let i = arrayDNS.length - 1; i >= 0; i--) {
			str += `.${arrayDNS[i]}`;
			if(!mapDNS.has(str)) {
				mapDNS.set(str, 1);
			} else {
				mapDNS.set(str, mapDNS.get(str) + 1);
			}
		}
	});
	return Object.fromEntries(mapDNS);
}

module.exports = {
  getDNSStats
};

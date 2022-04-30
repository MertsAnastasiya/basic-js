const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // if(arguments.length === 0) return 'Unable to determine the time of year!';
  // if (date.getTime() === (new Date()).getTime()) return 'Invalid date!';
  // try {
  //   const SEASONS = {
  //   'winter': [0, 1, 11],
  //   'spring': [2, 3, 4],
  //   'summer': [5, 6, 7],
  //   'autumn': [8, 9, 10]
  //   };
  //   const month = date.getMonth();
  //   for (value in SEASONS) {
  //       if(SEASONS[value].includes(month)) {
  //           console.log(month);
  //           console.log(value);
  //           return value;
  //       }
  //   };
  // } catch {
  //   return 'Invalid date!';
  // }
  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  getSeason
};

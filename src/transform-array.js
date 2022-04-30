const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  /*console.log('ARRAY:  ' + arr);
  if(!Array.isArray(arr)) return "\'arr\' parameter must be an instance of the Array!";
  let newArray = [...arr];
  arr.forEach((item, index) => {
      if (item === '--double-next') {
          newArray = [...arr];
          if(index === newArray.length - 1) newArray.pop();
          else newArray[index] = newArray[index + 1];
      };
      if (item === '--double-prev') {
          newArray = [...arr];
          if(index === 0) newArray.shift();
          else newArray[index] = newArray[index - 1];
      };
      if (item === '--discard-prev') {
          newArray = [...arr];
          if(index === 0) newArray.shift();
          else newArray.splice(index - 1, 2);
      };
      if (item === '--discard-next') {
          newArray = [...arr];
          if(index === newArray.length - 1) newArray.pop();
          else newArray.splice(index, 2);
      }
  });
  return newArray;*/
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

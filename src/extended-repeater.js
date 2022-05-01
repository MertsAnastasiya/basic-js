const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newArray = [];
    // const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = {...options};
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = {...options};

  if(typeof repeatTimes === 'undefined' ) repeatTimes = 1;
  if(typeof separator === 'undefined' ) separator = '+';
  if(typeof additionRepeatTimes === 'undefined' && typeof addition !== 'undefined') additionRepeatTimes = 1;
  if(typeof additionRepeatTimes === 'undefined' ) additionRepeatTimes = 0;
  if(typeof additionSeparator === 'undefined' ) additionSeparator = '|';
  if(typeof addition === 'undefined' ) addition = '';
    
  for( let i = 0; i < repeatTimes; i++) {
    newArray.push(String(str));
    for (let j = 0; j < additionRepeatTimes; j++) {
      if(j !== additionRepeatTimes -1 ) newArray.push(addition + additionSeparator);
      else newArray.push(String(addition));
    }
    if(i !== repeatTimes - 1) newArray.push(String(separator));
  };
  return (newArray.join(''));
}

module.exports = {
  repeater
};

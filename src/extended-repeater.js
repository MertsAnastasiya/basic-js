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
function repeater(str, options ) {
  // let newArray = [];
  //   // const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = {...options};
  //   const {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = {...options};
  //   console.log(addition);
  //   if(repeatTimes === 'undefined' ) repeatTimes = 1;
  //   if(separator === 'undefined' ) separator = '+';
  //   if(additionRepeatTimes === 'undefined' ) additionRepeatTimes = 1;
  //   if(additionSeparator === 'undefined' ) additionRepeatTimes = '|';
  //   if(addition === 'undefined' ) additionRepeatTimes = '';

  //   for( let i = 0; i < repeatTimes; i++){
  //         newArray.push(str);
  //         console.log(newArray);
  //         for(let j = 0; j < additionRepeatTimes; j++) {
  //             newArray.push(addition);
  //             if (j < additionRepeatTimes - 1) newArray.push(additionSeparator);
  //         }
  //         if( i < repeatTimes - 1) newArray.push(separator);
  //     };
  //     return (newArray.join(''));
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

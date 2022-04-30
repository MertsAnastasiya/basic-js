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
    try{
        // if(!Array.isArray(arr)) console.log('\'arr\' parameter must be an instance of the Array!');
        if(!Array.isArray(arr)) throw Error('\'arr\' parameter must be an instance of the Array!');
        let newArray = [];
        let command = '';
        let prevItem;
        arr.forEach(item => {
          if(item === '--double-next' || item === '--double-prev' || item === '--discard-next' || item === '--discard-prev') {
              command = item;
            } else {
              if(command !== '' ) {
                switch(command) {
                  case '--discard-next': 
                    prevItem = undefined;
                    break;
                  case '--discard-prev': 
                  if( prevItem !== undefined) {
                    newArray.pop();
                  };
                    newArray.push(item);
                    prevItem = item;
                    break;
                  case '--double-prev': 
                  if( prevItem !== undefined) {
                    newArray.push(prevItem);
                  }
                    newArray.push(item);
                    prevItem = item;
                    break;
                  case '--double-next':
                    newArray.push(item);
                    newArray.push(item);
                    prevItem = item;
                    break;
                }
                command = '';
              } else {
                newArray.push(item);
                prevItem = item;
              }
            }
          });
    
          if(command !== '' ) {
            switch(command) {
              case '--discard-prev': 
              if( prevItem !== undefined) {
                newArray.pop();
              }
                break;
              case '--double-prev': 
              if( prevItem !== undefined) {
                newArray.push(prevItem);
              }
                break;
            }
          }
          return (newArray);
    
      } catch {
        throw Error('\'arr\' parameter must be an instance of the Array!');
      }
    }
    

module.exports = {
  transform
};

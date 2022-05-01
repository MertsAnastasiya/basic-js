const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chainArray: [],
  
  getLength() {
      return this.chainArray.length;
  },

  addLink(value = '( )') {
    this.chainArray.push('( ' + value + ' )');
    return this;
  },
  
  removeLink(position) {
      console.log('length = ' + this.chainArray.length);
      console.log('position = ' + position);
      console.log('typeof position = ' + typeof(position));
      if(position > this.chainArray.length || position <= 0 || typeof(position) !== 'number'){
         this.chainArray = [];
         throw new Error("You can't remove incorrect link!");
      }
      this.chainArray.splice(position - 1, 1);
      return this;
  },
  
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  
  finishChain() {
    let str = this.chainArray.join('~~');
    this.chainArray = [];
    return str;
  }
};

module.exports = {
  chainMaker
};

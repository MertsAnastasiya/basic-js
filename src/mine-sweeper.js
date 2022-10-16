const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  let matrixTemp = new Array(matrix.length + 2);
  for(let i = 0; i < matrix.length + 2; i++) {
    matrixTemp[i] = new Array(matrix[0].length + 2);
    matrixTemp[i].fill(0);
  }
  matrix.forEach( (item, index) => {
    for(let i = 0; i < item.length; i++) {
      if(item[i]) {
        matrixTemp[index + 1][i + 1 + 1]++;
        matrixTemp[index + 1][i - 1 + 1]++;
        matrixTemp[index - 1 + 1][i + 1]++;
        matrixTemp[index + 1 + 1][i + 1]++;
        matrixTemp[index + 1 + 1][i + 1 + 1]++;
        matrixTemp[index + 1 + 1][i - 1 + 1]++;
        matrixTemp[index - 1 + 1][i - 1 + 1]++;
        matrixTemp[index - 1 + 1][i + 1 + 1]++;
      }
    }
  });
  let matrixResult = [];
  for(let i = 1; i < matrixTemp.length - 1; i++) {
    matrixResult.push([]);
    for(let j = 1; j < matrixTemp[i].length - 1; j++) {
      matrixResult[i-1].push(matrixTemp[i][j]);
    }
  }
  return matrixResult;
}

module.exports = {
  minesweeper
};

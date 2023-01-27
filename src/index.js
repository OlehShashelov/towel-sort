
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix?.length === 0 || matrix === undefined)
  return [];
  for (let i = 0; i < matrix.length; i++){
    if (i % 2){
        matrix[i].reverse();
    }
  }
  let arr = [].concat(...matrix);
  return arr;
}

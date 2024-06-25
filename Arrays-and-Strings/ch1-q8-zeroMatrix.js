function zeroMatrix(matrix) {
  const nrows = matrix.length
  const ncols = matrix[0].length
  let stack = []

  for(let i = 0; i < nrows; i++)
    for(let j = 0; j < ncols; j++) 
      if(matrix[i][j] === 0) stack.push([i, j]) 

  for([row, col] of stack) {
    for(let i = 0 ; i < ncols; i++) {
      matrix[row][i] = 0
    }
    for(let i = 0; i < nrows; i++){
      matrix[i][col] = 0
    }
  }
  return matrix
}

console.log(zeroMatrix([[1, 1, 1, 1], [1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]))
function transposeMatrix(matrix) {
  const nrows = matrix.length

  for(let i = 0; i< nrows; i++) {
    for(let j = i+1; j < nrows; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  return matrix
}

function rotateMatrix(matrix) {
  let left = 0
  let right = matrix.length - 1

  while(left < right) {
    const top = left
    const bottom = right

    for(let i = 0; i < right- left; i++){
      const temp = matrix[top][left+i]
      matrix[top][left+i] = matrix[bottom-i][left]
      matrix[bottom-i][left] = matrix[bottom][right-i]
      matrix[bottom][right-i] = matrix[top+i][right]
      matrix[top+i][right] = temp
    }
    left++
    right--
  }
  return matrix
}

console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))
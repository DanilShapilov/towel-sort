module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  return matrix.reduce((acc, arr, index) => {
    if (index % 2 === 0) {
      acc.push(...arr)
    } else {
      acc.push(...arr.reverse())
    }
    return acc
  }, [])
}
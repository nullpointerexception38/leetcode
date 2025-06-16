function rotate(matrix) {
  const size = matrix.length
  const depth = Math.floor(size / 2)
  let startPoint = { i: 0, j: 0 }
  let length = size
  for (let d = 0; d < depth; d++) {
    let { i, j } = startPoint
    console.log(`### [${i},${j}]`)
    const totalSteps = length * length - 4
    const endPoint = { i: startPoint.i + length - 1, j: startPoint.j + length - 1 }
    for(let x = startPoint.j; x < startPoint.j + length - 1; x++) {
      j = x
      let temp = matrix[i][j]
      for (let rotateIndex = 0; rotateIndex < 4; rotateIndex++) {
        const nextPos = getNextPos(rotateIndex, startPoint, endPoint, i, j, length)
        console.log(`${rotateIndex} [${i}, ${j}] -> ${nextPos.i} ${nextPos.j}`);
        i = nextPos.i
        j = nextPos.j
        temp = writeMatrix(matrix, temp, i, j)
        console.log(`temp ${temp}`);
        console.log(`\n`)
        log(matrix, i, j)
        console.log(`\n`)
      }
    }
    startPoint.i++
    startPoint.j++
    length -= 2
  }
  log(matrix)
  return matrix
}

function getNextPos(rotateIndex, startPoint, endPoint, i, j, length) {
  const { i: startI, j: startJ } = startPoint
  const { i: endI, j: endJ } = endPoint
  switch (rotateIndex) {
    case 0:
      return { i: startI + (j - startJ), j: endJ }
    case 1:
      return { i: endI, j: endJ - (i - startI) }
    case 2:
      return { i: endI - (endJ - j), j: startJ }
    case 3:
      return { i: startI, j: startJ + (endI - i) }
  }
}

function writeMatrix(matrix, value, i, j) {
  const temp = matrix[i][j]
  matrix[i][j] = value
  return temp
}

function log(matrix, i, j) {
  const str = matrix.map((row, x) => {
    return row.map((num, y) => (x == i && y === j) ? `[${num}]` :  String(num)).join(' ')
  }).join(`\n`)
  console.log(str)
}

rotate([
  [1,  2,   3,   4],
  [5,  6,   7,   8],
  [9, 10,  11,  12],
  [13, 14, 15,  16]
])

/*
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
])*/

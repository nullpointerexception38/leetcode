class Walker {
  constructor(i, j) {
    this.step = 0
    this.point = new Point(i, j)
    this.direction = 'RIGHT'
  }

  setStep(step) {
    this.step = step
  }

  resetStep() {
    this.step = 0
  }

  move() {
    this.step++
    switch (this.direction) {
      case 'TOP':
        this.point.i--
        break;
      case 'RIGHT':
        this.point.j++
        break;
      case 'BOTTOM':
        this.point.i++
        break;
      case 'LEFT':
        this.point.j--
        break;
      default:
        throw new Error('Unknown direction ' + this.direction);
    }
  }

  changeDirection() {
    const directions = ['TOP', 'RIGHT', 'BOTTOM', 'LEFT']
    const index = directions.indexOf(this.direction)
    const nextIndex = (index +  1) % directions.length
    this.direction = directions[nextIndex]
  }

  toString() {
    const { point, step, direction } = this
    const { i, j } = point
    console.log({ direciton, i, j, step })
  }
}

class Point {
  constructor(i, j) {
    this.i = i
    this.j = j
  }
}

function spiralMatrixIII(rows, cols, rStart, cStart) {
  const size = rows * cols
  const arr = []
  const walker = new Walker(rStart, cStart)
  let turns = 1
  let index = 0
  const pushArr = walker => {
    const { i, j } = walker.point
    if ((0 <= i && i < rows) && (0 <= j && j < cols)) {
      arr.push([i, j])
    }
  }
  pushArr(walker)
  while (arr.length < size) {
    //console.log('here', arr.length)
    const { i, j } = walker.point
    walker.move()
    pushArr(walker)
    //console.log(walker)
    const length = (turns * 2) - 1
    const lengthReached = walker.step >= length
    if (lengthReached && walker.direction === 'LEFT') {
      turns++
      walker.move()
      pushArr(walker)
      //console.log('left', walker)
      walker.setStep(1)
      walker.changeDirection()
      continue
    }
    if (lengthReached) {
      walker.changeDirection()
      walker.resetStep()
    }
  }
  return arr
}

const res = spiralMatrixIII(1, 4, 0, 0)
console.log(res)

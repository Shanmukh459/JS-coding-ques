class MinStack {
  constructor() {
    this.stack = []
  }

  push(value) {
    const min = this.min()
    this.stack.push({
      value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    })
  }

  pop() {
    if(!this.isEmpty())
      return this.stack.pop().value
  }

  min() {
    if(!this.isEmpty())
      return this.stack[this.stack.length-1].min
  }
  isEmpty() {
    return this.stack.length === 0
  }

}

const s = new MinStack()

s.push(5)
console.log(s.min())
s.push(10)
console.log(s.min())
s.push(-3)
console.log(s.min())
s.push(1)
console.log(s.min())
class StackOfPlates {
  constructor(threshold) {
    this.stack = [[]]
    this.threshold = threshold
  }

  push(value) {
    if(this.stack[this.stack.length-1].length >= this.threshold) this.stack.push([])
    this.stack[this.stack.length-1].push(value)
  }

  pop() {
    if(!this.stack) return "Empty stack"
    const value = this.stack[this.stack.length-1].pop()
    if(this.stack[this.stack.length-1].length === 0) this.stack.pop()
    return value
  }
  getLength() {
    return this.stack.length-1
  }
  printStack() {
    return this.stack
  }
}

const s = new StackOfPlates(3)
console.log(s.threshold)

s.push(5)
s.push(12)
s.push(10)
s.push(10)
s.push(10)
s.pop()
console.log(s.printStack())
s.pop()
console.log(s.printStack())
s.push(25)
console.log(s.printStack())
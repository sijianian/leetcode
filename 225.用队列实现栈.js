var MyStack = function() {
  this.data = []
}

MyStack.prototype.push = function(x) {
  this.data.push(x)
}
MyStack.prototype.pop = function() {
  return this.data.splice(this.data.length - 1, 1)
}

MyStack.prototype.top = function() {
  return this.data[this.data.length - 1]
}

MyStack.prototype.empty = function() {
  return this.data.length === 0
}

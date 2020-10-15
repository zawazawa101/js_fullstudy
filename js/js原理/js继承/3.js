function SuperType() {
  this.colors = ['red', 'green', 'blue']
}

function SubType() {
  console.log(this);
  SuperType(this)
}


let instance = new SubType()

// instance.colors.push('pink')

console.log(instance);
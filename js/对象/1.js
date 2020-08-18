var person = {
  name: 'zzz',
  age: 20,
  sex: 'boy',
  health: 100,
  smoke: function() {
    console.log('I am no smoking')
    this.health--
  },
  drink: function() {
    console.log('I am drinking')
    this.health++
  }
}
person.money = 1000

console.log(person.girlfriend)
console.log(person)
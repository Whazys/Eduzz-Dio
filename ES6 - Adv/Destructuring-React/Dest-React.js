// var arr = ['Apple', 'Banana', 'Orange']

// var apple = arr[0]
// var banana = arr[1]
// var orange = arr[2]

// // Destruc. Assignment

// var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange']
// console.log(apple, apple2)
var arr = ['Apple', 'Orange']
var obj = {
  name: 'Rafael',
  props: {
    age: 25,
    favoriteColors: ['black', 'blue']
  }
}
var fruit = arr[0].name

// Assignment
let [{ name: fruitName }] = arr

// Functions
function sum(arr) {
  var a = [0]
  return arr[0] + arr[1]
}

console.log(sum([5, 5]))

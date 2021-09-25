//rest operator ...

// const sum = (a, b, ...reset) => {
//   console.log(a, b, reset)
// }
// console.log(5, 5, 5, 2, 3)

// function sum(a, b) {
//   var value = 0

//   for (var i = 0; i < arguments.length; i++) {
//     value += arguments[i]
//   }

//   return a + b
// }

// console.log(sum(5, 5, 5, 2, 3))

//string, array, literal objects e objetos iteraveis

const str = 'Dio'
const arr = [1, 2, 3, 4]

function logArgs(a, b, c) {
  console.log(a, b, c)
}

const arr2 = [5, 6, 7].concat(arr)
console.log(arr2)

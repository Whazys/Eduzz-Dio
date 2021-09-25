// Symbols

// const uniqueId = Symbol('Oi')

// Symbol.iterator
// const arr = [1, 2, 3, 4]
// const str = 'DIO'

// console.log(arr[Symbol.iterator]().next())

// const obj = {
//   values: [1, 2, 3, 4],
//   [Symbol.iterator]() {
//     let i = 0
//     return {
//       next: () => {
//         i++
//         return {
//           value: this.values[i],
//           done: i > this.values.length
//         }
//       }
//     }
//   }
// }

// for (let value of obj) {
//   console.log(value)
// }

// // const it = obj[Symbol.iterator]()

// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())

// // Generators

// function* hello() {
//   console.log('Hello')
//   yield 1
//   console.log('From')
//   const value = yield 2
//   console.log(value)
// }

// const it = hello()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next('Outside'))

function* naturalNumbers() {
  let number = 0
  while (true) {
    yield number
    number++
  }
}

const it = naturalNumbers()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

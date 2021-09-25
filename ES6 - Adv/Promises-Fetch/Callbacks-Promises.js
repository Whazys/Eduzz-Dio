// Promises

const doSomething = () => {
  new Promises((resolve, reject) => {
    throw new Error('Something wrong')
    setTimeout(function () {
      resolve('First data')
    })
  })
}

const doOtherThingPromise = () =>
  new Promises((resolve, reject) => {
    setTimeout(function () {
      resolve('Second data')
    })
  })

doSomethingPromise()
  .then(data => {
    console.log(data)
    return doOtherThingPromise()
  })
  .then(data2 => console.log(data2))
  .catch(error => console.log('Ops', error))

// Pending
// Fulfilled
// Rejected

// // Callbacks

// function doSomething(callback) {
//   setTimeout(function () {
//     callback('First data')
//   }, 1000)
// }

// function doAll() {
//   try {
//     doSomething(function (data) {
//       var processedData2 = data.split('')
//       try {
//         doOtherThing(function (data2) {
//           var processedData2 = data2.split('')
//           try {
//             setTimeout(function () {
//               console.log(processedData, processedData2)
//             }, 1000)
//           } catch (err) {
//             // handle error
//           }
//         })
//       } catch (err) {
//         // handle error
//       }
//     })
//   } catch (err) {
//     // handle error
//   }
// }

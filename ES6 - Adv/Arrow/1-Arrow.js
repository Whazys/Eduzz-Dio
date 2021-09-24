// var sumOld = function (a, b) {
//   return a, b
// }
// //Arrow functions
// var sum = (a, b) => {
//   return a + b
// }

// console.log(sum(5, 15))

// function Car() {
//   this.foo = 'bar'
// }

// console.log(new Car())

var obj = {
  showContext: function showContext() {
    var that = this

    setTimeout(function () {
      that.log('after 1000ms')
    }, 1000)
  },
  log: function log(value) {
    console.log(value)
  }
}
obj.showContext()

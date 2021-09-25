// // Async
// const asyncTimer = () =>
//   Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(12345)
//     }, 1000)
//   })

// const simpleFunc = async () => {
//   const data = await asyncTimer
//   return data
// }

// simpleFunc()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// Emitter
const EventEmitter = require('events')

class Users extends EventEmitter {
  userLogged() {
    this.emit('User logged', data)
  }
}

const emitter = new EventEmitter()
users.once('User logged', data => {
  console.log(data)
})

Users.userLogged({ user: 'Rafael Santos' })
Users.userLogged({ user: 'Carlos Henrique' })

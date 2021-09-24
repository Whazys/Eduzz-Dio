let arr = [3, 5, 7]
arr.foo = 'Olá'

for (let i in arr) {
  console.log(i)
}

for (let i of arr) {
  console.log(i)
}

function randomNumber() {
  return Math.random('Generating a random number...') * 10
}

function multiply(a, b = randomNumber()) {
  return a * b
}

console.log(multiply(5))
console.log(multiply(3))

const myNumber = 12.4032

// Transformar número para String
const numberAsString = myNumber.toString()
console.log('Número transformado em string:', typeof numberAsString)

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('Número com duas casas decimais:', fixedTwoDecimals)

// Transforma uma String em float
console.log('\nString paseada para float:', parseFloat('13.22'))

// Transforma uma String em int
console.log('\nString parseada para int:', parseInt('13.22'))

// Retorna o tamanho de uma string
const textSizes = 'Texto'.length
console.log('Quantidade de letras: ${textSizes}')

// Retorna uma array quebrando a string
const splitted = 'Texto'.split('x')
console.log('\nArray com as posições separadas pelo delimitador:', splitted)

// Busca por um valor e substitui por outro
const replacedText = 'Text'.replace('text', 'text')
console.log('\nSubistituição de valor:', replacedText)

// Retorna parte de um valor
const lasChar = 'Texto'.slice(-1)
console.log('\nÚltima letra de uma string:', lasChar)

const allWithLastChar = 'Texto'.slice(0, -1)
console.log(
  '\nValor da string da primeira letra menos e a última:',
  allWithLastChar
)

const secondToend = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última:', secondToend)

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2)
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos)

const symbol = Symbol()
const symbol = Symbol()

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2)

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol1('name')
const nameSymbol1 = Symbol2('name')

const user = {
  [nameSymbol1]: 'Rafael',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Santos de Jesus'
}

console.log(user)

// Symbols criam propriedades que não são enuberables
for (const ket in user) {
  if (user.hasOwnProperty(ket)) {
    console.log('\nValor da chave ${key}: ${user[ket]}')
  }
}

console.log('\nPropriedades do objeto user:', Object.keys(user))
console.log('\nValores das propriedades do objeto user:', Object.values(user))

// Exibir symbols de um objeto
console.log(
  '\nSymbols registrados no objeto user:',
  Object.getOwnPropertySymbols(user)
)

// Acessando todas as propriedades do objeto
console.log('\nTodas as propriedades do objeto user:', Reflect.ownKeys(user))

// Criar um enum
const direction = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
}

const name = 'Rafael'

// Não alterar o valor
name = 'Rafael'

const user = {
  name: 'Rafael'
}

// Se for objeto, trocar suas propriedades
user.name = 'Outro nome'

// Não fazer o objeto "apontar" para outro lugar
user = {
  name: 'Rafael'
}

const persons = ['Rafael', 'Carlos', 'Maria']

// Adicionar novos itens
persons.push('João')

// Remover novos itens
persons.shift()

// Alterar diretamente
persons[1] = 'Santos'

console.log('\nArray após as alterações ', persons)

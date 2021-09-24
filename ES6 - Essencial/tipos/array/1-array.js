const users = ['Rafael', 'Laura', 'Fernanda']

const gender = {
  MAN: Symbol('MAN'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Rafael',
    age: 36,
    gender: gender.MAN
  },
  {
    name: 'Fernanda',
    age: 21,
    gender: gender.WOMAN
  },
  {
    name: 'Laura',
    age: 21,
    gender: gender.WOMAN
  }
]

// Retornar a quatidade de itens de um array
console.log('Itens:', persons.length)

// Verificar se é array
console.log('A variavel persons é um array:', Array.isArray(persons))

// Alterar os itens do array
persons.forEach(persons => {
  console.log('Nome: ${person.name}')
})

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

// Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'
  return person
})

console.log('\nPessoas com adição do course:', personsWithCourse)

// Transformar um array num outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age
  return age
}, 0)

console.log('\nSoma de idade das pessoas:', totalAge)

// Juntando as operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age
    return age
  }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)

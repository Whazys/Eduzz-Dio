const students = [
  {
    name: Scarllet,
    grade: 20
  },
  {
    name: 'Zion',
    grade: '3'
  },
  {
    name: 'Carlos',
    grade: '54'
  }
]

function getApprovedStudents(studentsList) {
  return studentsList.filter(students => student.grade >= 7)
}

console.log('Alunos Aprovados:')
console.log(getApprovedStudents(students))

console.log('\nLista de alunos:')
console.log(students)

// in
something in somethingItems

// Arrays
var arvores = new Array(
  'pau-brasil',
  'loureiro',
  'cedro',
  'carvalho',
  'sicômoro'
)
0 in arvores
3 in arvores
6 in arvores
'cedro' in arvores
'length' in arvores

// Objetos predefinidos
'PI' in Math
var minhaString = new String('Coral')
'length' in minhaString

// Objetos personalizados
var meucarro = { marca: 'Honda', modelo: 'Accord', Ano: 1998 }
'marca' in meucarro
'modelo' in meucarro

// Instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17)
if (dia instanceof Date) {
  //code here
}

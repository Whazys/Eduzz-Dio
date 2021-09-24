const fruit = 'Maçã'

switch (fruit) {
  case 'Banana':
    console.log('R$ 4,00 / kg')
    break
  case 'Mamão':
  case 'Pêra':
    console.log('R$ 2,00 / kg')
    break
  default:
    console.log('Produto não existe no estoque')
}

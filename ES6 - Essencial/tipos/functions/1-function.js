function fn() {
  return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn2 = () => {
  //Mais de uma expressão
  return 'Code here'
}

//Funções são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

//Receber os parametros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam)

logFnResult(fn);

// Receber e retornar Funções
const controlFnExec; fnParam => allowed => {
  if (allowed){
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution(); // Não irá executar a função

// controlFnExec como função
function controlFnExec(fnParam){
  return function(allowed){
    if(allowed){
      fnParam();
    }
  }
}
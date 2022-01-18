//Expressão de função
let soma = function soma(x, y) {
  console.log(x + y)
}

//Funções e 'var' são listadas no topo, inicialmente pelo JS.
//Uma expressão de função pode ser chamada apenas em baixo da exmpressão por ser uma variavel
soma(10, 10)

//Uma função pode ser chamada independente da ordem no código.
apresentacao()

function apresentacao() {
  console.log('Olá')
}

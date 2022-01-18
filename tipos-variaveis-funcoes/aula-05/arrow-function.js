function apresentar(nome) {
  console.log(`Meu nome é ${nome}`)
}

apresentar('André')

//Arrow Function
const apresentarArrow = nome => console.log(`Meu nome é ${nome}`)
const somaArrow = (x, y) => console.log(x + y)

apresentarArrow('Felipe')
somaArrow(10, 10)

//Arrow Function - com mais de uma linha
const somaNumerosPequenos = (x, y) => {
  if (x || y >= 10) {
    console.log('Somente numero de 1 a 9')
  } else {
    console.log(x + y)
  }
}

somaNumerosPequenos(2, 2)

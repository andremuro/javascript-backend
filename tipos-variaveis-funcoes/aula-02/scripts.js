//var

var altura = 5
var comprimento = 7

var area = altura * comprimento
console.log(area)

//let, mais recomendada que a var

let forma2 = 'retangulo'
let altura2 = 5
let comprimento2 = 7

if (forma2 === 'retangulo') {
  area2 = altura2 * comprimento2
  console.log(area2)
} else if (forma2 === 'triangulo') {
  area2 = (altura2 * comprimento2) / 2
  console.log(area2)
} else {
  console.log('Forma não reconhecida!')
}

//const

const forma3 = 'triangulo'
const altura3 = 5
const comprimento3 = 7
let area3 = null

if (forma3 === 'retangulo') {
  area3 = altura3 * comprimento3
  console.log(area3)
} else if (forma3 === 'triangulo') {
  area3 = (altura3 * comprimento3) / 2
  console.log(area3)
} else {
  console.log('Forma não reconhecida!')
}

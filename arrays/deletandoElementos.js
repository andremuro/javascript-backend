const notas = [10, 6.5, 8, 7.5, 5]

//Deletando nota no array notas, no ultimo elemento
//Não precisa parametro, pois retira o último elemento
//Se utilizar notas.shift() , retira o primeiro elemento
notas.shift()
console.log(notas)

notas.push(10)
console.log(notas)

notas.pop()
console.log(notas)

let mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log('MédiaArray = ' + mediaArray)
//Mesmo resultado do console acima, mas de uma forma diferente
console.log(`MédiaArray = ${mediaArray}`)

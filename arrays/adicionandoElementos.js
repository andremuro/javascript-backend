const notas = [10, 6.5, 8]

//Para adicionar no primeiro elemento utilizar: notas.unshift(10)
notas.unshift(10)
console.log(notas)
//Adicionando nota no array notas, no ultimo elemento
notas.push(7.5)
console.log(notas)

let mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log('MédiaArray = ' + mediaArray)

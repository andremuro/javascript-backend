const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const notasAlunos = [10, 7, 9, 6]

let listaDeAlunosNotas = [alunos, notasAlunos]

let nomeAluno

function exibeListaNome(nomeAluno) {
  if (listaDeAlunosNotas[0].includes(nomeAluno)) {
    i = listaDeAlunosNotas[0].indexOf(nomeAluno)
    return console.log(
      listaDeAlunosNotas[0][i] + ' , sua nota é ' + listaDeAlunosNotas[1][i]
    )
  } else {
    return console.log('Aluno não encontrado!')
  }
}

function exibeListaNota(notaAluno) {
  if (listaDeAlunosNotas[1].includes(notaAluno)) {
    i = listaDeAlunosNotas[1].indexOf(notaAluno)
    return console.log(
      'Aluno(a) : ' +
        listaDeAlunosNotas[0][i] +
        ' | ' +
        ' Nota : ' +
        listaDeAlunosNotas[1][i]
    )
  } else {
    return console.log('Nota não encontrada!')
  }
}

exibeListaNome('Juliana')
exibeListaNome('marcos')
exibeListaNota(7)
exibeListaNota(3.3)

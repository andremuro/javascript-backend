const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const notasAlunos = [10, 7, 4, 3]

// O _ antes do aluno faz com que o parametro seja considerado mesmo não que não seja utilizado
const reprovados = alunos.filter(
  (_aluno, notaAluno) => notasAlunos[notaAluno] < 5
)

console.log(`Reprovado(s): ${reprovados}`)

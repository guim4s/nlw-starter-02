// Dados
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

// função para alterar o valor da matéria escolhida de número para texto
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
};

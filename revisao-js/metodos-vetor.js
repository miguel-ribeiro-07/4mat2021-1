let pets = [
  { nome: 'Mel', especie: 'cão', sexo: 'F', peso: 5.5, idade: 2 },
  { nome: 'Paçoca', especie: 'gato', sexo: 'F', peso: 3.2, idade: 5  },
  { nome: 'Matusalém', especie: 'tartaruga', sexo: 'M', peso: 12, idade: 103 },
  { nome: 'Thor', especie: 'cão', sexo: 'M', peso: 23, idade: 8 },
  { nome: 'Paco', especie: 'papagaio', sexo: 'M', peso: 1, idade: 53 },
  { nome: 'Aveia', especie: 'gato', sexo: 'F', peso: 3.5, idade: 4}
]

let numeros = [2, 0, -7, 11, 4, 9, 13, -8]

// find() -> encontra o primeiro elemento que coincide com o critério
// Caso não encontre, retorna undefined
console.log(pets.find(elemento => elemento.nome === 'Thor'))
console.log(pets.find(x => x.especie === 'gato' && x.sexo === 'M'))
console.log(pets.find(x => x.idade >= 4))

console.log('---------------------------------------------')

// some() -> verifica se há ALGUM elemento que coincide com o critério
// Retorna true caso exista ou false se não existir
console.log(pets.some(x => x.name === 'Mingau'))
console.log(pets.some(x => x.idade > 5))

console.log('---------------------------------------------')

// every() -> verifica se TODOS os elementos passam no critério
console.log(pets.every(x => x.peso >= 1))
console.log(pets.every(x => x.especie === 'cão'))

console.log('---------------------------------------------')

// filter() -> cria um novo vetor apenas com os elementos que passarem no critério
// Retorna um vetor vazio caso não haja nenhum elemento que coincida com o critério
console.log(pets.filter(x => x.especie === 'gato'))
console.log(pets.filter(x => x.idade >= 50))
console.log(pets.filter(x => x.especie === 'gato' && x.sexo === 'M'))

console.log('---------------------------------------------')

// map() -> cria um NOVO vetor, do mesmo tamanho do original, contendo alguma
// transformação dos elementos deste último
// Separar apenas o nome dos pets, em maiúsculas
console.log(pets.map(x => x.nome.toUpperCase()))

// Novo vetor contendo os números do vetor original elevados ao quadrado
console.log(numeros.map(x => x ** 2))

console.log('---------------------------------------------')

// reduce() -> reduz o vetor a apenas um valor, de acordo com a função passada
// Somando o peso dos pets
// O primeiro parâmetro é o acumulador, responsável por manter o resultado até o momento
// O segundo parâmetro é o valor atual, que deverá ser adicionado ao acumulado de alguma
// forma

// Soma
console.log(numeros.reduce((acum, valor) => acum + valor))

// Multiplicação
console.log([2, 5, 4, 7].reduce((acum, valor) => acum * valor))

// Concatenação
console.log(['Bom ', 'dia, ', 'galera!'].reduce((acum, valor) => acum + valor))

console.log('****************************************')
let pesos = pets.map(x => x.peso) // Criando um vetor apenas com os pesos dos pets
console.log(pesos)
console.log(pesos.reduce((acum, val) => acum + val))

// Fazendo tudo em uma linha só
console.log(pets.map(x => x.peso).reduce((acum, val) => acum + val))

// Calculando o peso médio
console.log(pets.map(x => x.peso).reduce((acum, val) => acum + val) / pets.length)

console.log('---------------------------------------------')

// includes() => retorna true caso exista um elemento no vetor igual ao parâmetro passado
console.log(numeros.includes(4))    // true
console.log(numeros.includes(10))   // false

// Diferença entre includes() e some()
// includes() -> procura um valor dentro de um vetor de valores simples
// some() -> procura por um critério, passado via arrow function, em um vetor de objetos
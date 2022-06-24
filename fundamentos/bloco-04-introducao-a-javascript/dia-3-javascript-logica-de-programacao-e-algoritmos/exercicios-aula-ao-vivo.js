// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

let soma = 0; //criar variavel que armazena soma;

for (let i = 35; i <= 105; i++) {
  soma += i; // soma de 35 ate 105 a variavel soma
}

console.log(soma); // printa soma final;

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
let contador = 0;
for (let i = 15; i <= 155; i++) {
  if (i % 3 === 0) {
    contador++;
  }
}

console.log(contador);

if (contador >= 50) {
  console.log("Mensagem secreta!");
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
let escolhas = ["pedra", "papel", "tesoura"];
let jogador1 = Math.floor(Math.random() * 3);
let jogador2 = Math.floor(Math.random() * 3);

let escolhaDoJogador1 = escolhas[jogador1];
console.log(escolhaDoJogador1);

let escolhaDoJogador2 = escolhas[jogador2];
console.log(escolhaDoJogador2);

if (escolhaDoJogador1 === escolhaDoJogador2) {
  console.log("empate");
} else if (escolhaDoJogador1 === "pedra" && escolhaDoJogador2 === "tesoura") {
} else if (escolhaDoJogador1 === "pedra" && escolhaDoJogador2 === "papel") {
} else if (escolhaDoJogador1 === "papel" && escolhaDoJogador2 === "tesoura") {
}

//for só pra teste
// for(let i = 0; i < 30; i++) {
//   jogador1 = Math.floor(Math.random() * 3);
//   console.log(jogador1);
// }

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.
// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova. (edited)

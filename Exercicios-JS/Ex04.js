// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().
var prompt = require ('prompt-sync')();

let nomes = [];

let novoNome = prompt("Digite um nome: ");

let nomesMinusculo = nomes.map(nome => nome.toLowerCase());


if (nomesMinusculo.includes(novoNome.toLowerCase())) {
  console.log("Nome já está na lista.");
} else {
  nomes.push(novoNome);
  console.log("Nome adicionado com sucesso!");
}

console.log("Lista final de nomes:", nomes);

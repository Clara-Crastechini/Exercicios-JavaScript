// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();
  
const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:");

const palavrasLetra = frase
  .split(" ")
  .filter(palavra => palavra.startsWith(letra)); 

console.log(`Quantidade de palavras que começam com '${letra}':`, palavrasLetra.length);

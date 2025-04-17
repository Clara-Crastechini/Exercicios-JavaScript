// Crie uma função que recebe um número e retorna formatado em real (R$), com duas
// casas decimais e vírgula no lugar do ponto. Ex: 10.5 → R$ 10,50. Use toFixed() e
// replace().


var prompt = require('prompt-sync')();

let valor = parseFloat(prompt("Digite o valor: "));

console.log("Preço formatado: ", Precoformatado(valor));

function Precoformatado (valor) {
  const precoNovo = "R$ " + valor.toFixed(2).replace(".", ",");
  return precoNovo;
}
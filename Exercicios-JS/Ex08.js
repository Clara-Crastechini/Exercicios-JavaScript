// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando replace() com regex.

const texto = "Clara Crastechini @! 77653 :)";
const limpo = texto.replace(/[^a-zA-Z0-9]/g, "");

console.log(limpo); 

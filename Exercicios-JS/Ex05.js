// Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
//     → &quot;Olá mundo bonito&quot;), usando split(), filter() e join().

const frase = "  Esta   frase    tem   espaços   extras   ";

const fraseSemDuplicados = frase.split(" ").filter(palavra => palavra !== "").join(" "); 

console.log(fraseSemDuplicados); 


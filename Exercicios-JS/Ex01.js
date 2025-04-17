//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
//formato de CPF (123.456.789-01) usando slice e concatenação.

const cpf = '321654987';
const Formatado = formatarCPF(cpf);
console.log(Formatado);



function formatarCPF(Digitado) {

    return Digitado.slice(0, 3) + '.' + Digitado.slice(3, 6) + '.' + Digitado.slice(6, 9) + '-' + Digitado.slice(9);
}


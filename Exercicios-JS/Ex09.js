// Crie uma função que verifica se uma palavra é palíndroma usando split(), reverse()
// e join().

function Palindroma (palavra) {
    const Reversa = palavra.split('').reverse().join('');
    return palavra === Reversa;
  }
  
  console.log(Palindroma('level'));
  console.log(Palindroma('clara')); 

  console.log(Palindroma('ovo'));
  console.log(Palindroma('brenda'));  
//IIFE --> Imediately invoked function expression
(function(podeReceberParametros){
    
   const nome='João';
   const sobrenome='Berger';

   function criaNome(nome,sobrenome){
    return nome + ' ' + sobrenome;
   }
   console.log(criaNome(nome,sobrenome));

})("Aqui você pode enviar valores numéricos");
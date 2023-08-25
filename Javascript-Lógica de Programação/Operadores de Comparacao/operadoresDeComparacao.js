/* 
Operadores de comparação
> maior que
< menor que
<= menor ou igual a 
== igualdade(valor)
=== igualdade estrita (valor e tipo, se é string ou number)
!= diferente
!== diferente estrito (valor e tipo, se é string ou number)
*/
const expressao= 10 > 5;
console.log(expressao);

const expressao2= 6>=5;
console.log(expressao2);

const expressao3= 10==5;//nesse caso de comparação ele transforma a string em um number automaticamente
console.log(expressao3);

const expressao4= 10==='10';//aqui ele compara os valores e os tipos de dados que estão sendo inseridos, no caso string e number
console.log(expressao4);
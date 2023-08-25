//           01234567
let umaString="Um texto";
let esporte='formula1';
let nome='João';
let frase='O rato roeu a roupa do rei de Roma.';

console.log(umaString[4]);//mostra o qu e tem na quarta posição da let umaString 
console.log(umaString.charAt(4));//mostra o qu e tem na quarta posição da let umaString 
console.log(umaString.concat(`${nome} correu em um ${esporte}  `));//concatena as lets
console.log(esporte+'campeonato pegado');
console.log(esporte.indexOf('1'));// procura determinada palavra dentro da let e mostra em qual posição ela inicia
console.log(esporte.lastIndexOf('f',4));//começa a busca pelo caractere da ultima posição para a primeira
console.log(esporte.match(/a/));
console.log(esporte.search(/u/));//parecido com indexof, só que nesse caso ele mostra apenas a posição da letra escolhida
console.log(esporte.replace(/1/,'2'));//faz a troca de uma string por outra
console.log(frase.length);
console.log(frase.slice(-5,-1));//nesse você está subtraindo -3 do tamanho da s
console.log(frase.substring(frase.length -5));//tem o mesmo efeito do slice
console.log(frase.split(' ',5)); //ele faz um recorte no seu let e mostra na tela 
console.log(frase.split('a',2)); //ele faz um recorte no seu let e mostra na tela 


 
 
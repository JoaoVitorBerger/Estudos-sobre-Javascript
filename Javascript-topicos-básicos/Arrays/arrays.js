//             
// const alunos=['João, Carlos, Ricardo'];
// console.log(alunos);
// alunos[0]='Eduardo';//altera o valor de uma das variaveis do array
// alunos[3]='Luiza';//altera o valor de uma das variaveis do array
// alunos.push('Otávio');//adiciona no fim do seu array
// console.log(alunos);
// alunos.shift();//remove o primeiro elemento do array
// alunos.unshift('Luiza');//troca o item 0 do array por outra variavel
// const removido=alunos.pop();//remove o ultimo elemento do array, sendo possivel salvar esse elemento em uma variável
// delete alunos[1];
// console.log(alunos instanceof Array);//true ou false se é um array ou não
// console.log(alunos.slice(0,3));

const alunos=['João, Carlos, Ricardo'];
alunos.push("Carlos");
alunos.push("Roberto");
console.log(alunos.slice(0,2));//cria seções dentro de um array, limita qual é o tamanho que você quer utilizar do array


// function soma (x,y){
//     const resultado= x+y;
//     return resultado;
// }
// console.log(soma(1,2));
const nome=['João','Carlos','Murilo','Juan'];


//For clássico - Geralmente com interáveis (array ou strings)

// For in - Retorna o índice ou chave(string, array ou objetos)
//retorno do for in
//const nome{João, Maria, Carlos}
//João, Maria, Carlos

//For of - Retorna o valor em si(literáveis)
//retorno do for of
//const nome{João, Maria, Carlos}
//J
//o
//ã
//o

// for(let i=0; i<nome.length;i++ ){
//     console.log(nome[i]);
// }

//  for(let i in nome){
//      console.log(nome[i]);
//  }

 for(let valor of nome){
     console.log(valor);
 }

// nome.array.forEach(function(valor,indice){
//     console.log(valor,indice)
// });

// const pessoa={
//     nome:'Luiz',
//     sobrenome:'Otávio',
// };
const numeros=[1,2,3,4,5,6,7,8,9];
console.log(numeros)
for(let numero of numeros){//representação do of: for(let i=0; i<numeros.lenght; i++)
    
    if(numero===2){
        console.log('Aqui era para aparecer o número')
        continue;//ele pula a execução do código
    }

    if(numero===7){
        break;//Vai somente até a condição imposta a ele, no caso um se é realmente um number e se é um 7
    }
    console.log(numero)
}
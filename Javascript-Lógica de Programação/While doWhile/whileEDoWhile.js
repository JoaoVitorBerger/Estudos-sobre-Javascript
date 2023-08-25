//while: primeiro será analisada a condição e depois feita a execução do código
//do while: primeiro será realizado a execução do código e depois será feita a comparação

const nome ='João';

let i = 0;
while(i< nome.lenght){
    console.log(nome[i]);
    i++;
}
function random(min,max){
    const r=Math.random()*(max-min)+min;
    return r;
}
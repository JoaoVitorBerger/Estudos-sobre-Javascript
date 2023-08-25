//Try: tente, será usado para tentar rodar o código
//Catch:catar, se caso ocorra um erro dentro de try ele exibe uma mensagem mostrando qual foi o erro que ocorreu
//Throw: caso em um if a condição não atenda, como uma senha inválida, ele gera uma mensagem informando o erro
//finally: sempre será executado.Diferente de catch que só funciona quando é detectado um erro, finally sempre será executado tendo erros ou não
function soma(x,y){
    if(typeof x!=='number'|| typeofy!=='number'){
        throw('x e y precisam ser números');
    }
 
    return x+y;

   
}
try{
    console.log(soma(1,2));
    console.log(soma('1',2));
}catch(error){
    console.log('Algo mais simples e amigável')
}

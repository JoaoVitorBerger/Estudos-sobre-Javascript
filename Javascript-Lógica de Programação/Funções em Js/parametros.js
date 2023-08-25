function funcao(){
    console.log(arguments[6])
}
funcao('Valor',1,2,3,4,5,6,7,8);

function funcaoo(a,b,c){
    let total=0;
    for(let argumento of arguments){
        total+= argumento;
    }
    console.log(total,a,b,c);
}
funcaoo(1,2,3,4,5,6,7,8);

function conta(a,b){
    console.log(a+b);
}
conta(2);
function continha(a,b=2,c=4){
    console.log(a+b+c);
}
continha(2,undefined ,4)

function funcaol({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade,);
}
funcaol({nome:'João',idade:22,sobrenome:'Berger' });

function conta(operador, acumulador, ...numeros){ 
    console.log(operador,acumulador, numeros);
}
conta('*',0,20,30,40,50);
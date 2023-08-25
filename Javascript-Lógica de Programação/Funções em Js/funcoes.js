//Declaração de função (Function hoisting - leva suas funções para o topo da página,independente se você chame a função na ultima ou na primeira linha, o motot do js leva sua função para o topo)

falaOi();
function falaOi(){
    console.log('Oie');
}
// First-class objects (Objetos de primeira classe)
//Function expression seria quando em uma constante eu armazeno uma função, podendo utilizar a mesma para colocar como parâmetro em outra
const souUmDado=function(){
    console.log('sou um dado.')
};
souUmDado();

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow=()=>{
    console.log('sou uma arrow function')
};

//Dentro de um objeto
const obj={
    falar:function(){
        console.log('Estou falando...')
    }
}
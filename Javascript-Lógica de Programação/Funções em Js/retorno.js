//return
//Retorna um valor
// Termina a função
function soma(a,b){
    return a+b; 
}
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " "  + resto;
    }
     return falaResto;
}

const falar= falaFrase('Boa');
const resto= falar('Tarde');
console.log(falar)

function criaMultiplicador(multiplicador){
    return function(n){
        return n*multiplicador;
    }
   
}
const duplica= criaMultiplicador(2);
console.log(duplica(2))

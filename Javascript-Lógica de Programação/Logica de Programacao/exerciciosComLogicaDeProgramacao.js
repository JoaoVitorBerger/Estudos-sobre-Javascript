    function checaValor(){

const numero1=Number(prompt('Digite um número'));
const numero2=Number(prompt('Digite outro número'));
const resposta=document.querySelector('.resposta');
resposta.innerHTML=`O maior número entre ${numero1} e ${numero2} é ${comparacao()}`;

    function comparacao(){
if(numero1>numero2){
    return numero1;
}
    return numero2;

}
}

checaValor();
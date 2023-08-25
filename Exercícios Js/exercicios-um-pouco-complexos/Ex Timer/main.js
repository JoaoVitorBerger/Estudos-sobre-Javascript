//a funçaõ Date recebe seus valores em milisegundos, ou seja 1000ms=1s
//timezone ele reseta a data para 01/01/1970 e a partir daí você pode fazer modificações 
function criaHoraDosSegundos(segundos){
    const data=new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{hour12:false,timeZone:'UTC'});
}

const relogio= document.querySelector('.relogio');
const iniciar= document.querySelector('.iniciar');
const pausar= document.querySelector('.pausar');
const zerar= document.querySelector('.zerar');
let segundos=0;
let timer;

function iniciaRelogio(){
     timer= setInterval(function(){
        segundos++;
        relogio.innerHTML= criaHoraDosSegundos(segundos);
    },1000);
}


iniciar.addEventListener('click',function(){
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click',function(){
    clearInterval(timer);
});

zerar.addEventListener('click',function(){
    segundos;
    clearInterval(timer);
    relogio.innerHTML='00:00:00';

});
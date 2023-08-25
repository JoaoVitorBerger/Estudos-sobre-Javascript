function criaHoarDosSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{hour12:false,timeZone:'UTC'});
}


const iniciar=document.querySelector('.iniciar');
const pausar=document.querySelector('.pausar');
const zerar=document.querySelector('.zerar');
const horas=document.querySelector('.relogio');
let segundos=0;
let timer;

function iniciaRelogio(){
    const timer= setInterval(function(){
        segundos++;
        horas.innerHTML=criaHoarDosSegundos(segundos);
    },1000);
}
    
function pausaTimer(){
    setTimeout(function(){
        clearInterval(timer);
    });
}



iniciar.addEventListener('click',function(){
    iniciaRelogio();
});
pausar.addEventListener('click',function(){
    pausaTimer();
});
zerar.addEventListener(click,zeraTimer)
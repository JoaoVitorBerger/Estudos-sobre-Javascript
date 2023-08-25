function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{hour12:false})
    
}
function funcaoDoInterval(){
    console.log(mostraHora());
}
setInterval(funcaoDoInterval,1000)
//setInterval- determina uma quantidade de tempo para a execução de alguma função


// const timer=setInterval(function(){
//     console.log(mostraHora());
// },1000);

// setTimeout(function(){
//     clearInterval(timer);
// },10000);
// setTimeout(function(){
//     console.log('olá mundo!')
// },5000);

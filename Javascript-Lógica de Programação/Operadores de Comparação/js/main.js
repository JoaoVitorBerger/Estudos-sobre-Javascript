const paragrafo=document.querySelector('.paragrafos');
const ps=paragrafo.querySelectorAll('p');

const estilosBody=getComputedStyle(document.body);
const backgroundColorBody=estilosBody.backgroundColor;

ps[1].innerHTML='E ai meu chapa'

for(let p of ps){
    p.style.backgroundColor=backgroundColorBody;
}

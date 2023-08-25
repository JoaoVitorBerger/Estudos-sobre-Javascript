const botao= document.querySelector('.tente-adivinhar');
let numAleatorio= Math.floor(Math.random()*(1,100));



function recebeValores(){
    const palpite=Number(prompt('Qual é o seu palpite?'));
    if(palpite<numAleatorio){
        const areaTexto=document.querySelector('.container');
        const resposta=areaTexto.appendChild('p');
        const revelacao=resposta.innerHTML=`Você falou ${palpite}. Meu número é <b>MAIOR</b> `;
        return revelacao;
    }else{
        const areaTexto=document.querySelector('.container');
        const resposta=areaTexto.appendChild('p');
        const revelacao=resposta.innerHTML=`Você falou ${palpite}. Meu número é <b>MENOR</b> `;
        return revelacao;
    }
}

botao.addEventListener('click',recebeValores);

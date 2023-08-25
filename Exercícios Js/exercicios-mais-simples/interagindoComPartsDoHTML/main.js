function dados(){
    const nome=prompt('Qual é seu nome ?');
    const resultado=document.querySelector('p');
    resultado.innerHTML=`Olá, ${nome}!É um grande prazer te conhecer`;
}
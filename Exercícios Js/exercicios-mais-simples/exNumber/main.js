const resposta=document.querySelector('.resposta');
const numero=Number(prompt('Digite seu numero'));
resposta.innerHTML=`<p>Raiz quadrada:${numero**.5}</p>`
resposta.innerHTML+=`<p>${numero}e inteiro:${Number.isInteger(numero)}</p>`
resposta.innerHTML+=`<p>Arredondado para baixo:${Math.floor(numero)}</p>`
resposta.innerHTML+=`<p>Arredondando para cima:${Math.ceil(numero)}</p>`
resposta.innerHTML+=`<p>Com duas casas decimais:${Number.toFixed(numero,2)}</p>`

resposta.innerHTML+=`<p></p>`


 
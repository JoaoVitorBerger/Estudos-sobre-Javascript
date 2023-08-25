const numero= parseFloat(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const areaTexto=document.getElementById('texto');

numeroTitulo.innerHTML+=numero;
areaTexto.innerHTML+=`<p>Seu número + 2 é ${numero+2}</p>`;
areaTexto.innerHTML+=`<p>${numero}  é um número inteiro: ${Number.isInteger(numero)}</p>`;
areaTexto.innerHTML+=`<p>É NaN ${Number.isNaN(numero)}</p>`;
areaTexto.innerHTML+=`<p>Arredondando para baixo ${Math.ceil(numero)}</p>`;
areaTexto.innerHTML+=`<p>Arredondando para cima ${Math.floor(numero)}</p>`;
areaTexto.innerHTML+=`<p>Com duas casa decimais ${numero.toFixed(2)}</p>`;
areaTexto.innerHTML+=`<p>Raiz quadrada ${numero**1/2}</p>`;
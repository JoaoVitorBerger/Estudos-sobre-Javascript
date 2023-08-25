

function recolheDados(){
   const nome=prompt('Qual é seu nome ?');
   const primeiraNota=Number(prompt(`Qual foi a primeira nota de ${nome} ?`));
   const segundaNota=Number(prompt(`Além de ${primeiraNota}, qual a outra nota de ${nome}?`));
   const media=(primeiraNota+segundaNota)/2;

   let mensagem;
   if(media<=5){
        mensagem='Estude um pouco mais';
   } else{
        mensagem='Parabéns pela conquista';
   }

   const escreveTexto=document.querySelector('.container p');
   escreveTexto.innerHTML='';
   escreveTexto.innerHTML+=`<p>Calculando a média final de ${nome}</p>`
   escreveTexto.innerHTML+=`<p>As notas obtidas foram ${primeiraNota,segundaNota}</p>`
   escreveTexto.innerHTML+=`<p>A média final de ${nome} será ${media}</p>`
   escreveTexto.innerHTML+=`<p>A mensagem que temos para você é ${mensagem}</p>`

}




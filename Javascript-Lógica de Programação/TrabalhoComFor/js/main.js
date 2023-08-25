 const elementos=[
    {tag:'p',texto:'Qualque texto que você quiser'},
    {tag:'div',texto:'frase2'},
    {tag:'section',texto:'frase3'},
    {tag:'footer',texto:'frase4'},
 ];
const container=document.querySelector('.container');
const div=document.createElement('div');

for(let i=0; i<elementos.length; i++){
    let{ tag , texto}=elementos[i];
    let criaTag=document.createElement(tag);
    let textoCriado=document.createTextNode(texto);

    criaTag.appendChild(textoCriado);
    div.appendChild(criaTag);
   
} 
container.appendChild(div);
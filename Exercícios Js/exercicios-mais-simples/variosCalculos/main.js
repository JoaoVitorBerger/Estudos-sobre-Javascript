let contador=0;
let res=document.querySelector('.resultado');

function calcula(){
    contador++;
    res.innerHTML=`<p>O contador está com <mark>${contador}</mark> cliques</p>` 

}

function limpaFuncao(){
    contador=0;
    res.innerHTML=' ';
}
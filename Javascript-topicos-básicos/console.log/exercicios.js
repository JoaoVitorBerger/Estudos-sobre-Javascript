function escreveNome(){
let nome=prompt("Digite seu nome");
let escreveNome=document.querySelector(".escreve");
escreveNome.innerHTML=`Meu nome é ${nome} e estou aprendendo js às 11 da manhâ`
}
escreveNome();
const nome ='ricardo';
function retornaFuncao(){
    const nome='luiz';
    return function(){
        return nome;
    };
}
const identidade=retornaFuncao();
console.log(identidade())
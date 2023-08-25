function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala:function(assunto){
            return`${this.nome} está ${assunto}`;
        }
    };
}
const primeirapessoa= criaPessoa('João','Berger');
console.log(primeirapessoa.fala('Javascript'));
console.log(criaPessoa.sobrenome);
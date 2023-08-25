// const array=[1,2,3];
// array.push(4);
// array[0]='luiz';
// array='Outra';//Aqui apresenta um erro,
//  //pois não é possivel alterar o direcionador de memória de uma constante, só é
// //permitido a alteração dos valores

// const pessoal={
//     nome:'Luiz',
//     sobrenome:'Miranda',
//     idade:25
// };//o que define a criação de um objeto é o uso das chaves{}
// console.log(pessoal.nome);
// function criaPessoa(nome,sobrenome,idade){
//     return{
//         nome,sobrenome,idade,
//     };
// }
// const pessoa1=criaPessoa('João Vitor','Berger',22);
// console.log(pessoa1);
const pessoal={
    nome:'Luiz',
    sobrenome:'Miranda',
    idade:25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoal.fala();
pessoal.incrementaIdade();
pessoal.incrementaIdade(); 
pessoal.incrementaIdade();

console.log(pessoal);

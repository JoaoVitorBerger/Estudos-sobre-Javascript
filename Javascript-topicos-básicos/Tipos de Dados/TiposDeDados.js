const nome='João';
const nome1="João";
const nome2=`João`;
const num1=10;
const num2=10.52;
let nomeAluno;//undefined-> não aponta para local nenhum na memória
let sobrenomeAluno= null;//Nulo-> não aponta para local nenhum na memória
//const bolean;Verdadeiro ou Falso
console.log( typeof nome,nome);

const a=[1,2];
const c=[1,2]
const b=c;
b.push(3);
console.log(a,b);
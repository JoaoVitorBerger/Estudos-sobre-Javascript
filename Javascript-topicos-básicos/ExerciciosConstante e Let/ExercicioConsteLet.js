/*
João Vitor Berger tem 22 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 
João Vitor Berger nasceu em 2000
*/



const nome = 'JoãoVitor';
const sobrenome = 'Berger';
const idade = 22;
const peso = 84;
const altura = 1.8;
let imc;
imc = peso / altura ** 2;
console.log(`${nome} tem ${idade} anos, pesa${peso}Kg`);
let anoNascimento;
anoNascimento = 2022 - idade;
console.log(`Tem ${altura} de altura e seu imc é de ${parseInt(imc)}`);
console.log(`${nome + sobrenome} nasceu em ${anoNascimento}`);
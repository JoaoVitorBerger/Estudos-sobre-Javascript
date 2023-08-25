let num = 10.38892349086038;
let num2 = 2.5;
let num3 = .7;
let num4 = .1;

console.log(num.toString() + num2);
console.log(typeof num);
console.log(num.toString(2));//transforma o numero em bases decimais utilizadas em programação
console.log(num.toFixed(2));// em casos de números extensos, utiliza-se para fixar uma quantidade de casas decimais depois da virgula
console.log(Number.isInteger(num1));
let temp = num1 * 'ola';
console.log(temp);
console.log(Number.isNaN(temp));
console.log(num3 + num4);

num3 += num4;
num3 += num4;
num3 += num4;
num3=parseFloat(num3.toFixed(2));
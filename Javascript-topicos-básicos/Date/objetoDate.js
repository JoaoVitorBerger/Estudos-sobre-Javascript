//  const tresHoras= 60 * 60 * 3 * 1000;
//  const umDia = 60*60*24*1000;
//  const data = new Date(0 + tresHoras +umDia );

//  console.log(data.toString(0 ));

// const data= new Date(2019,3,20,15,14,21,500);
// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear()+3);
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getDay());// 0 É DOMINGO 
// console.log(Date.now());


function zeroAEsquerda(num){
    return num >= 10? num:`0${num}`;
}
function formataData(data){
    const dia = zeroAEsquerda (data.getDate());
    const hora = zeroAEsquerda (data.getHours());
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());
    return `${ano}/${mes}/${dia}/${hora}/${min}/${seg}/`
}
const data= new Date();

console.log(formataData(data));
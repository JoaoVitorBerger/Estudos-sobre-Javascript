/*
&& -> false && true -> false"o valor mesmo"
|| ->

FALSY
*false
0 Falsy
'' "" `` Falsy
null / undefined Falsy
NaN Falsy

*/
// console.log('João' &&  '' && 'Maria');
// function falaOi(){
//     return document.write('Oi');
// }
// const vaiExecutar = confirm('Quer um oi?');
// if(vaiExecutar==true){
//     falaOi()
// }else{
//     document.write('Boa tarde');
// }
 function falaOi(){
    return'Oi';
 }
 const vaiExecutar= 'Joãozinho';
 console.log(vaiExecutar &&falaOi());
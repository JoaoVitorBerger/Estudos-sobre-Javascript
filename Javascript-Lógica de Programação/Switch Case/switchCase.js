function diaSemanaTexto(diaSemana){
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Dimingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terca';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        default:
            diaSemanaTexto='';
            return diaSemanaTexto;
    
    }
}

const data = new Date();
const diaSemana = data.getDay();
const semanaTexto= diaSemanaTexto(diaSemana)

console.log(diaSemana, semanaTexto);

// if(diaSemana===0){
//     diaSemanaTexto='Domingo';

// }else if(diaSemana===1){
//     diaSemanaTexto='Segunda'
// }else if(diaSemana===2){
//     diaSemanaTexto='Terca'
// }else if(diaSemana===3){
//     diaSemanaTexto='Quarta'
// }else if(diaSemana===4){
//     diaSemanaTexto='Quinta'
// }else if(diaSemana===5){
//     diaSemanaTexto='Sexta'
// }else if(diaSemana===6){
//     diaSemanaTexto='Sábado'
// }

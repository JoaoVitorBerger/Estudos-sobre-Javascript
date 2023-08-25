const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terca';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;

    }
}
function getNomeMes(numeroMes) {
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'marco';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
       
    }
}

function criaData(data){
    const diaSemana=data.getDay();
    const numeroMes=data.getMonth();

    const nomeDia=getDiaSemanaTexto(diaSemana);
    const nomeMes=getNomeMes(numeroMes);
    return`${nomeDia} ,${nomeMes}`
    
}
h1.innerHTML= criaData(data);
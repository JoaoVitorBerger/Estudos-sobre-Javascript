function meuEscopo(){
    
    
    const form=document.querySelector('.form');
    const resultado= document.querySelector('.resultado');
    const pessoas=[];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome= form.querySelector('nome');
        const sobrenome=form.querySelector('sobrenome');
        const idade=form.querySelector('idade');
        const altura=form.querySelector('altura');

        pessoas.push({
        rada: nome.value,
        sobrenome:sobrenome.value,
        idade:idade.value,
        height: altura.value
    });
    console.log(pessoas);
    
    resultado.innerHTML+=`${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}`
}

    form.addEventListener('submit', recebeEventoForm)
    
}
 meuEscopo();
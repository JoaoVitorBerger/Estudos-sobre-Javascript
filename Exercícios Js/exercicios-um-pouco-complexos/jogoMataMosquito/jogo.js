var altura = 0
var largura= 0
var vidas =1
var tempo = 0

var criaMosquitoTempo=1500

var nivel = window.location.search
nivel = nivel.replace('?', '')



if(nivel === 'normal'){
    criaMosquitoTempo= 1500
    tempo = 20
}else if( nivel === 'dificil'){
    criaMosquitoTempo=1000
    tempo = 30
}else if( nivel === 'lenda'){
    criaMosquitoTempo=750
    tempo = 60
}else if(nivel === ''){
   window.location.href='menu.html'
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){
    tempo --

    if(tempo<0){
       clearInterval(cronometro)
       clearInterval(criaMosquito)
       window.location.href="vitoria.html"
    }else{
        document.getElementById('tempo').innerHTML=this.tempo
    }
    
},1000)

function posicaoRandomica(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas>3){
            window.location.href="fim_de_jogo.html"
        } else{
            document.getElementById('v'+ vidas).src="imagens/coracao_vazio.png"
            vidas++
        }

       
    }

    var posicaoX = Math.floor(Math.random() * largura)-90
    var posicaoY = Math.floor(Math.random() * altura)-90

    posicaoX = posicaoX < 0 ? 0: posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY

    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.style.left=posicaoX +'px'
    mosquito.style.top=posicaoY +'px'
    mosquito.style.position='absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick = function(){
        this.remove()
    }

    mosquito.className=tamanhoRandomico() + ' '+ ladoAleatorio()
    
}

function tamanhoRandomico(){
    var caso = Math.floor(Math.random() * 3)

    switch(caso){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'        
    }

}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoB'
        case 1:
            return 'ladoA'
                
    }
}
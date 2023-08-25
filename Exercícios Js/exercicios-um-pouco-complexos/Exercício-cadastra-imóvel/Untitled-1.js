
let opc = ''
let nome
let imoveis = []

do {

opc = prompt('Olá,vamo realizar um cadastro:\nMoveis cadastrado: '+imoveis.length+
            '\nDigite a opção desejada:'+
            '\n 1 - Cadastrar moveis'+
            '\n 2 - Visualizar moveis'+
            '\n 0 - Sair')

    switch(opc){
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('Digite o nome do proprietario:'),
            imovel.quarto = prompt('Digite a quantidade de quartos: '),
            imovel.banheiro = prompt('Digite a quantidade de banheiro: '),
            imovel.garagem = prompt('possui garagem? (Sim/Não)')
            
            
            const confirmacao = confirm(
                `Salvar este imovel?

            Proprietario: ${imovel.proprietario}
            Quarto: ${imovel.quarto}
            Banheiro: ${imovel.banheiro}
            Possui Garagem: ${imovel.garagem}`)

            if(confirmacao){
                imoveis.push(imovel)
                alert('Imovel salvo !')
            }
            break

        case '2':
            for(let i = 0;i<imoveis.length;i++)
            
            alert(`
            Imovel ${i+1}

            Proprietario:${imoveis[i].proprietario}
            Quarto:${imoveis[i].quarto}
            Banheiro:${imoveis[i].banheiro}
            Possui garagem:${imoveis[i].garagem}`
            )
            break   

        case '0':
            alert('saindo...')
            break
            default:
                alert('opção invalida')
    }


}while(opc != 0)
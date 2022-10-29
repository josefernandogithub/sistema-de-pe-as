let peso = 150
let nomePeca = 'paralamas'

var listaDePecas = ['lanterna', 'motor', 'amortecedor', 'cambio', 'painel', 'cabeçote',]
var novaListaDePecas = []

if(peso<100){
    console.log('A peça deve ter no minimo 100g')
}else{
    console.log('A peça tem o peso adequado')
    switch (nomePeca.length) {
        case nomePeca.length = 2:
            console.log('é necessario ter um nome com mais de 2 caracteres ');
            break;
        case nomePeca.length = 3:
            console.log('é necessario ter um nome com mais de 3 caracteres ');
            break;
    
        default:
            console.log('o nome esta correto');
            if(listaDePecas.length < 10){
                console.log('A peça vai ser adicionada na posição:')
                console.log((listaDePecas.length + 1)) 
             
                listaDePecas.push(nomePeca)
                console.log(listaDePecas)
            }else{
                console.log('lista esta cheia coloque em uma nova lista')
                novaListaDePecas.push(nomePeca)
            }
            
      }
}






  


function mensagemInicializacao(){
    var inicializacao = Array('Inicialização do script!',
                              'este script testa um backend em nodeJS com express',
                              'aplicação escutando na porta 3000',
                              'acesse em http://localhost:3000');
    inicializacao.forEach(item => console.log(item));

}
exports.montaTexto = function(tipo){
    switch (tipo) {
        case exports.INICIALIZACAO:
            mensagemInicializacao();
            break;
    
        default:
            break;
    }
}

exports.INICIALIZACAO = 1;
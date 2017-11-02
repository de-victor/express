const imagensRouter = require('./imagens/imagens.routers');

exports.routers = function(app){
    app.get('/', padrao);
    app.use('/banco', imagensRouter);
}

function padrao(req, res) {
    let resposta = {msg:'metodos disponiveis',
                   uris:[{uri: '/banco/imagens'}]};
    res.json(resposta);
  };
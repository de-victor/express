const dbUtil = require('../db');

exports.padrao = function(req, res){
    res.json({codigo: 0, msg: 'nada aqui cidadão'});
}

exports.todasImagens = function (req, res) {
    const client = dbUtil.buildConnection();
    client.connect();
    const dados = [];
  
    client.query('SELECT * from imagens', [], (err, teste) => {
      teste.rows.forEach(item => dados.push(item));
      client.end();
      res.json(dados);
    });
    
  };




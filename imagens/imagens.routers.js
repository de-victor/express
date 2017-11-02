const express = require('express');
var router = express.Router();
const acoes = require('./queries');

router.get('/', acoes.padrao);
router.get('/imagens', acoes.todasImagens);


module.exports = router;
const express = require('express');
const mensagens = require('./mensagens');
const rotas = require('./routers');

const porta = 3000;
const app = express();

mensagens.montaTexto(mensagens.INICIALIZACAO);

rotas.routers(app);

app.listen(porta);
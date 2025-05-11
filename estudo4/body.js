/**
 * body é onde fica os dados
 * 
 * podemos usar um middleware para intercepta essa informação
 */

const express = require('express');
const app = express();

app.use(express.json())// antes de tudo, vamos definir json, assim poderemos interceptar json no body

app.post('/user', (req, res) => {
 let dados = req.body; // aqui pegamos o termo
 //
 res.status(201).json({mensagem:`nome:${dados.nome}, idade:${dados.idade}`})
});

app.listen(3000, () => {
 console.log('hello tô em http://localhost:3000')
})


/**
 * aqui vai uma checklist que você pode usa:
 * 
 * [] app.use(express.json())
 * [] Enviar JSON no body
 * [] Usar req.body como um super poder kkk
 * [] Validar os dados(com joi, zod, ou na tora)
 */
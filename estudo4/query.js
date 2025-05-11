/**
 * Agora vamos fala de Query.
 * quando você pesquisa algo,
 * provavelmente já viu que o termo da pesquisa aparecer na url
 * 
 * podemos pegar esse tipo de dado com Query
 * 
 * dá para cria um google de pessima qualidade só na url
 */

const express = require('express');
const app = express();

app.get('/pesquisa', (req, res) => {
 let termo = req.query.q; // aqui pegamos o termo
 // a url seria algo assim: 'http://localhost:3000/pesquisa?q=xadrez'
 res.send(`o que é "${termo}"?`)
});

app.listen(3000, () => {
 console.log('hello tô na 3000')
})

// query pode ser útil quando o dado é opcional
// ou representa filho ou paginação
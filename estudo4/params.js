/**
 * Agora vamos fala de Params.
 * 
 * Params é uma forma de parâmetro que fica na url(exemplo: id de usuário)
 * 
 * vamos imaginar que você quer por exemplo,
 * que quando o usuário cópia url que está no perfil dele, tenha alguma relação com o tal em questão
 * 
 * podemos pegar esse tipo de dado com Params
 */
const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  res.send(`usuário com o id:${id}`)
});

app.listen(3000,() => {
  console.log('hello tô na 3000')
})
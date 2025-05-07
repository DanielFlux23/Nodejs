/**
 * rotas podem ser bem úteis
 * 
 * neste exemplo vamos usa express 
 * para padronizar melhor
 */
 
 const express = require('express');
const app = express();

app.use(express.json()); // vamos ensinar express usa JSON 

app.post('/termo', (req, res) => {
  res.send('Você acabou de acessar "termo"');
  // basta substituir "termo" pelo nome de rota que deseja
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
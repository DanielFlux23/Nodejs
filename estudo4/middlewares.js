/**
 * vamos fala de middlewares
 * 
 * middleware é um interceptador, 
 * como se fosse um hacker querendo seus dados
 */
 
 const express = require('express');
const app = express();

app.use((req,res,next) => {
 console.log('humm.. que dados interessante..'+req.method)
});


app.listen(3000, () => {
 console.log('Servidor rodando na porta 3000');
});
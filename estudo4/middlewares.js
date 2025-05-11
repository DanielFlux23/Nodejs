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
 next() // vamos passa para o próximo
 // next é como dizer para um funcionário: prefeito! agora é hora de outra pessoa trabalha
});


app.listen(3000, () => {
 console.log('Servidor rodando na porta 3000');
});
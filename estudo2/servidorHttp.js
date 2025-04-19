const http = require('http'); // modulo interno

/// criando um servidor (req= Requisição, res = resposta)
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // 200 (informa que está tudo certo) 
    // 'Content-Type':'text/plain' (informa que a resposta será apenas texto) 
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    
    res.end('olá!, parece que o servidor está funcionando')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    
    res.end('Ops!, parece que ocorreu um erro')
  }
});

server.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})

// data:18/04/2025
/* aqui eu criei um servidor http puro simples sem Express */
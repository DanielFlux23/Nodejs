# request
> o req (de request) é o objeto com tudo o que veio do cliente na requisição


#### req.body

Corpo da requisição – usado em POST, PUT, etc.

// Enviado pelo cliente:
{ "nome": "Daniel" }

// Acessa assim:
req.body.nome  // -> "Daniel"

Só funciona se usar app.use(express.json()) antes.

---

#### req.params

Parâmetros de rota (ex: /user/:id)

app.get('/user/:id', (req, res) => {
  req.params.id // -> valor do ":id" na URL
});


---

#### req.query

Parâmetros de busca na URL (ex: /search?q=cafe)

req.query.q  // -> "cafe"


---

#### req.headers

Cabeçalhos da requisição – útil pra autenticação, tipos de conteúdo, etc.

req.headers['authorization']  // -> token ou qualquer outro header


---

#### req.method

Método HTTP: 'GET', 'POST', etc.

req.method // -> "POST"


---

#### req.url

URL completa da requisição.

req.url // -> "/user/123?admin=true"


---

- req.body	Dados enviados pelo cliente
- req.params	Parâmetros dinâmicos na rota
- req.query	Filtros e buscas via URL
- req.headers	Metadados da requisição (ex: token)
- req.method	Verbo HTTP usado
- req.url	Caminho da requisição
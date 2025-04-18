# Fundamentos & Ambiente

#### 1. estudo
- **data**:14/04/2025
- **assuntos**:event loop, require, process, __dirname, __filename, module.exports
- **concluído?**:
- [x]
- **o que foi feito**  
criação de uma base sólida sobre nodeJS
---
## 1. Instalação do Node.js + npm 

```bash
node -v
npm -v
```

### Instalar Yarn :
```bash
npm install -g yarn
```

---

## 2. Event Loop 
> Garçom Multitarefa

### Analogia:
- O **garçom** recebe pedidos (requisições).
- Ele **não espera o prato (I/O)** ficar pronto.
- Enquanto isso, **atende outras mesas** (tarefas assíncronas).

### Conceitos:
- Node é **single-threaded**, mas trata múltiplas tarefas com:
  - **Callbacks**
  - **Promises**
  - **Async/Await**

> “Enquanto a cozinha faz o prato, o garçom já tá pegando mais pedidos.”

---

## 3. Módulos e CommonJS

### Exportando:
```js
// somar.js
function somar(a, b) {
  return a + b;
}
module.exports = somar;
```

### Importando:
```js
// app.js
const somar = require('./somar');
console.log(somar(2, 3)); // 5
```

- `exports` é um atalho para `module.exports`, **mas não substitui ele**
- Evita: `exports = {}` (isso quebra a referência do módulo).

---

## 4. Variáveis Globais

### `process`
```js
console.log(process.argv);       // Argumentos de linha de comando
console.log(process.env.NODE_ENV); // Ambiente (ex: development)
```

### `__dirname`
```js
console.log(__dirname); // Caminho do diretório atual
```

### `__filename`
```js
console.log(__filename); // Caminho + nome do arquivo atual
```

---

## 5. Exemplo Prático: `hello.js`

```js
console.log(`Olá do Node! Estou em ${__dirname}`);
console.log(`Arquivo atual: ${__filename}`);
console.log(`Argumentos:`, process.argv.slice(2));
console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
```

Execute com:
```bash
node hello.js argumento1 argumento2
```

---

## 6. Projeto Exemplo

Estrutura:

```
meu-projeto-node/
├── app.js
├── math/
│   └── somar.js
├── utils/
│   └── garcom.js
└── hello.js
```

### `math/somar.js`
```js
function somar(a, b) {
  return a + b;
}
module.exports = somar;
```

### `utils/garcom.js`
```js
function atenderMesa(pedido, tempo) {
  console.log(`Recebi o pedido: ${pedido}`);
  setTimeout(() => {
    console.log(`Pedido pronto: ${pedido}`);
  }, tempo);
}
module.exports = atenderMesa;
```

### `app.js`
```js
const somar = require('./math/somar');
const atenderMesa = require('./utils/garcom');

console.log('--- Sistema de Restaurante Node.js ---');

console.log(`2 + 3 = ${somar(2, 3)}`);

atenderMesa('Macarrão', 3000);
atenderMesa('Pizza', 1000);
atenderMesa('Café', 2000);

console.log(`Diretório atual: ${__dirname}`);
console.log(`Arquivo atual: ${__filename}`);
console.log(`CLI Args:`, process.argv.slice(2));
console.log(`Modo: ${process.env.NODE_ENV || 'development'}`);
```

---

## Resumo do Dia:

- Instalou e configurou Node.js e gerenciadores de pacotes
- Entendeu o Event Loop como cérebro multitarefa
- Criou e usou módulos com CommonJS (`require`, `module.exports`)
- Usou variáveis globais do ambiente Node
- Montou um mini-projeto funcional

---

**Próximo passo?** REST APIs, Express, File System, CLI apps… o céu (ou o cluster) é o limite!
// process
console.log(process.argr)
// agumentos da linha de comando
if (process.env.NODE_ENV === 'production') {
  console.log('Rodando em modo produção. Sem bagunça!');
} else {
  console.log('Modo dev: debug, logs e café liberados.');
} //process.env.NODE_ENV é tipo o modo ninja do seu app Node.js, ele diz em que ambiente sua aplicação está rodando: desenvolvimento, produção, teste, ou qualquer outro que você definir.

const somar = require('./math/somar');
const atenderMesa = require('./utils/garcom');

console.log('--- Sistema de Restaurante Node.js ---');

// Usando módulo de matemática
console.log(`2 + 3 = ${somar(2, 3)}`);

// Simulando multitarefa com "pedidos"
atenderMesa('Macarrão', 3000); // 3s
atenderMesa('Pizza', 1000); // 1s
atenderMesa('Café', 2000); // 2s

// Variáveis globais
console.log(`Diretório atual: ${__dirname}`);
console.log(`Arquivo atual: ${__filename}`);
console.log(`Argumentos CLI:`, process.argv.slice(2));
console.log(`Modo: ${process.env.NODE_ENV || 'development'}`);
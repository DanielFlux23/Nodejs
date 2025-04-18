//1. process.argv – Argumentos da linha de comando

//node app.js Daniel café

console.log(process.argv);
// [ 'node', '/caminho/app.js', 'Daniel', 'café' ]

//Útil pra CLIs. Quer os argumentos reais? Pega a partir do índice 2:

const args = process.argv.slice(2);

//2. process.env – Variáveis de ambiente

//API_KEY=abc123 node app.js

console.log(process.env.API_KEY); // abc123

//Bom pra configs secretas, sem hardcode.


//3. process.exit([code]) – Finaliza o processo

if (!args.length) {
  console.error('Sem argumentos!');
  process.exit(1); // Código de erro
}

//0 = sucesso, qualquer outro = erro. O sistema operacional entende esses códigos.


//4. process.cwd() – Diretório atual de onde o script foi iniciado

console.log(process.cwd());

//Não confundir com __dirname, que é o diretório onde o arquivo atual está.


//5. process.on('exit', cb) – Ganchos para a saída

process.on('exit', (code) => {
  console.log(`Saindo com o código ${code}`);
});

//Serve pra limpar a bagunça antes de morrer.


//6. process.stdin, process.stdout, process.stderr – I/O da linha de comando

// ler algo do usuário?
process.stdin.on('data', (data) => {
  console.log(`Você digitou: ${data}`);
});

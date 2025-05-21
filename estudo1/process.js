  /**process.argv**/
  //com process.argv podemos pegar argumentos da linha de comando
  
  /*
  vejamos um exemplo:
  node app.js Daniel café
  */
  console.log(process.argv); // aqui estamos lendo a linha de comando
  // resultado [ 'node', '/caminho/app.js', 'Daniel', 'café' ]
  
  // prefeito, agora temos os argumentos
  
  //podemos ver que os argumentos relevantes estão a partir do índice 2:
  
  const args = process.argv.slice(2);
  
  /** process.env **/
  // que tal ver as variáveis de ambiente?
  
  //API_KEY=abc123 node app.js
  
  console.log(process.env.API_KEY); // abc123
  
  //Bom pra configs secretas, bem interessante
  
  
  /**process.exit([code])**/
  //process.exit([code]) – Finaliza um processo
  
  if (!args.length) {
    console.error('Sem argumentos!');
    process.exit(1); // Código de erro
  }
  
  /* isso lembra C com seus return 0; return 1;
  //1 = erro, ou qualquer outro = erro.
  //0 = sucesso, qualquer outro = erro.

    /**process.cwd()**/
  // process.cwd() – Diretório atual de onde o script foi iniciado
  
  console.log(process.cwd()); // isso pode ser bastante útil
  
  //Não confundir com __dirname, que é o diretório onde o arquivo atual está.
  
  /**process.on('exit', cb)**/
  //process.on('exit', cb) Ganchos para a saída
  
  process.on('exit', (code) => {
    console.log(`Saindo com o código ${code}`);
  });
  
  //Serve pra limpar a bagunça antes de morrer.
  
  /**process.stdin, process.stdout, process.stderr**/
  //process.stdin, process.stdout, process.stderr – I/O da linha de comando
  
  // ler algo do usuário
  process.stdin.on('data', (data) => {
    console.log(`Você digitou: ${data}`); //imprime a entrada do usuário depois do Enter
    process.exit(); //vamos usa isso para parar de ler a entrada do usuário, não queremos um loop ne?
  });
  
  process.stdout.write('Hello Word')
  //  para não perder o costume aqui vai o hello
  // diferente do console.log, stdout e mais direto
  
  
  process.stderr.write('hello error')
  // alguns sistemas separam 'stdout' de 'stderr' então pode ser bom utilizar
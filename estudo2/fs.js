const fs = require('fs');

//lendo um arquivo
fs.readFile('/estudo2/uteis/arquivo.text', 'utf-8', (erro, dados) => {
  if (erro) {
    console.log('erro ao ler o arquivo', erro)
    return
  }
  console.log('que dados legais:', dados)
})

//escrever um arquivo
fs.writeFile('/estudo2/uteis/arquivo.text', 'vou apenas da uma alterada no texto', (erro) => {
  if (erro) throw erro;
  console.log('arquivo criando com sucesso')
})

// deletar um arquivo
fs.unlink('/estudo2/uteis/arquivo.text', (erro) =>{
  if (erro) throw erro;
  console.log('adeus arquivo')
})
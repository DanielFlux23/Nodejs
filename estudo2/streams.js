const fs = require('fs')

//ler dados
const readble = fs.createReadStream('/estudo2/uteis/arquivo.txt');

//escrever dados
const whitable = fs.createWriteStream('/estudo2/uteis/arquivoSaida.txt');

readble.pipe(whitable)

// tratar erros

readble.on('error',(erro) => {
  console.log('erro ao ler arquivo: ',erro)
})

whitable.on('error', (erro) => {
  console.log('erro ao escrever no arquivo: ',erro)
})
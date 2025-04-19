// Criando um buffer a partir de uma string, codificada com utf-8
const buf = Buffer.from('hello', 'utf-8');

console.log('olhar os numeros!: ', buf); //os bytes do buffer 'hello'

// Alocar um buffer com 10 bytes, com zeros
const buf2 = Buffer.alloc(10);

console.log('alocando 10 bytes: ', buf2); //um buffer com 10 zeros

// Escrever
buf2.write('hello'); // Escreve 'hello' a partir do byte 0
buf2.write(' word', 5); // Escreve ' word' a partir do byte 5

console.log(buf2); 

// Lendo(buf)
console.log(buf.toString()); //'hello'

// Concatenar 
const buf3 = Buffer.concat([buf, buf2]);

console.log('Buffer concatenado: ', buf3);
console.log('String concatenada: ', buf3.toString());
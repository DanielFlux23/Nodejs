/**
 * iremos criar um CRUD artificial,
 *  isso irá ser importante para 
 * aprimorar o nosso conhecimento 
 * e generalização para com os brancos 
 * de dados de terceiros.
 * Além de ser bastante útil para
 *  a resolução de problemas e bugs
 * 
 * é com criar uma bomba própria
 *  antes de testar as dos outros kk
 */
 
 /**
  * o CRUD significa:
  * Create(POST)
  * Read(GET)
  * Update(PUT / PATCH)
  * Delete(DELETE)
  * podemos cria, lê, atualiza e apaga recursos via HTTP em conjunto de método de API.
  */
  
 // /src/data/items.js
let items = [
 { id: 1, name: "Café", quantity: 3 },
 { id: 2, name: "Livro", quantity: 1 }
];// aqui temos algo que ilustrar um banco de dados(ainda não é um banco de claro)
  // da até para usa module.exports = items;
 const create = (item) => {
 const newItem = { id: Date.now(), ...item };
 // aqui estamos adicionado um id, e o item
 items.push(newItem);
 return newItem;
};
 
 function Read(id) {
  //Uma função bem básica para ler o conteúdo com base no id
  return items.find(item=> item.id === id );
 }
 
 const Update = (id, newData) => {
  // pegamos o index do item com o id em questão
 const index = items.findIndex(item => item.id === id);
 // se ele não existi retorna null
 if (index === -1) return null;
 // ou propagar, e retorna os dados novos 
 items[index] = { ...items[index], ...newData };
 return items[index];
};
 create(['oi', 2])
 console.log(Read(1))
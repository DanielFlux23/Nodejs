console.log("Início");

process.nextTick(() => {
  console.log("Executado no nextTick");
});

console.log("Fim");

/* 
Início
Fim
Executado no nextTick
*/

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
Promise.resolve().then(() => console.log("promise"));
process.nextTick(() => console.log("nextTick"));

/* 
nextTick
promise
timeout
immediate
*/
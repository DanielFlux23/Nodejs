console.log("1 - Antes");

setTimeout(() => {
  console.log("2 - Timeout de 0ms");
}, 0);

console.log("3 - Depois");

/* 
1 - Antes
3 - Depois
2 - Timeout de 0 ms
*/
const fazerAlgoPesado = () => {
  console.log('1. iniciando sistema')
  
  setImmediate(() => {
  console.log('2. usando setImmediate')
})

console.log('3. terminando sistema')
}

fazerAlgoPesado()
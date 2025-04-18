 const fofoca = (name) => {
  const fofocas = [
    `${name} é muito bonito`,
    `${name},eu sei o que você fez`,
    `${name}, o que é isso atras de você?`
  ]
  
  return fofocas[Math.floor(Math.random()*fofocas.length)]
  
}

module.exports = {fofoca};
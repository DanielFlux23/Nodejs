/* uma forma um pouco mais primitiva
de executar código de forma assíncrona*/

const fazerAlgo = (callback) => {
  setTimeout(() => {
    console.log('feito')
    callback()
  },1000)
}

fazerAlgo(()=> console.log(1+2))
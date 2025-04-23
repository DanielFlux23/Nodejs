const fazerAlgo = (callback) => {
  return new Promise((resolve,
    reject) => {
    resolve('feito')
  })
}

fazerAlgo()
  .then(resolve => console.log(resolve))
  .catch((e) => console.log(e))
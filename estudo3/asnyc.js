const fazerAlgo = async (n) => {
  try {
    
    const res = await Math.random()*n
    console.log(res)
  } catch (e) {
    throw e
  }
}

fazerAlgo(100)
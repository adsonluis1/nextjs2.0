export async function useAddCar ({newCompra}){
    try {
        newCompra = JSON.stringify(newCompra)
        const post = await fetch(`http://localhost:3000/carrinho/`,{
        body:newCompra,
        method:'POST',
        'Content-Type':'application/json'
        })
        console.log('pass')
    } catch (error) {
        onsole.log(error)
    }
    
  }
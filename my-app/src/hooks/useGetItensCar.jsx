export async function useGetItensCar(){
    try {
        const get = await fetch('http://localhost:3000/carrinho',
            {method:'GET'}
        )
        const data =  await get.json()        
        return await data
    } catch (error) {
        console.log(error)
    }
    
} 
export async function useGetItens(){
    try {
        const get = await fetch('http://localhost:3000/itens/',
            {method:'GET'}
        )
        const data =  await get.json()        
        return await data
    } catch (error) {
        console.log(error)
    }
    
} 
'use client'
import { useEffect, useState } from 'react'
import * as S from './styled'


const CardItens= ({produc}) => {
  const [data,setData] = useState('')
  const [quantidade, setQuatidade] = useState(1)

  useEffect(()=>{
    const Fetch = async ()=>{
      const get = await fetch('http://localhost:3000/itens',{
        method:'GET'
      })
      const data = await get.json()
      setData(data)
    }
    Fetch()
  },[])  

  

  return (
    <S.divConteiner>
      <S.img src={produc.img.src} alt={produc.img.alt}/>
      <S.divChild>
        <S.heading>{produc.nome}</S.heading>
        <S.price>R$:{produc.price}</S.price>
        <S.radioQuant type='number' min={1} max={100} value={quantidade} onChange={((e)=> setQuatidade(e.target.value))}  placeholder='Quantidade'/>
      </S.divChild>
      <S.input defaultValue='Comprar' type='button'/>
    </S.divConteiner>
  )
}



export default CardItens
'use client'
import { useState } from 'react'
import * as S from './styled'
import { useAddCar } from '@/hooks/useAddCar'

const CardItens= ({produc}) => {
  const [quantidade, setQuatidade] = useState(1)
  let newCompra = {...produc, quantidade}
  console.log(produc.img)
  return (
    <S.divConteiner>
      <S.img src={produc.img} alt={produc.nome}/>
      <S.divChild>
        <S.heading>{produc.nome}</S.heading>
        <S.price>R$:{produc.price}</S.price>
        <S.radioQuant type='number' min={1} max={100} value={quantidade} onChange={((e)=>{setQuatidade(e.target.value)})}  placeholder='Quantidade'/>
      </S.divChild>
      <S.input defaultValue='Comprar' onClick={()=> useAddCar({newCompra})}type='button'/>
    </S.divConteiner>
  )
}



export default CardItens
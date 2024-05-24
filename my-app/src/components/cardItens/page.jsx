'use client'
import { useContext, useState } from 'react'
import * as S from './styled'
import { Context} from '@/hooks/Context'


const CardItens= ({produc}) => {
  const [quantidade, setQuatidade] = useState(1)
  const {carrinho, setCarrinho} = useContext(Context)
  let newCompra = {...produc, quantidade}
  

  return (
    <>
      <S.divConteiner>
        <S.img src={produc.img} alt={produc.nome}/>
        <S.divChild>
          <S.heading>{produc.nome}</S.heading>
          <S.price>R$:{produc.price}</S.price>
          <S.radioQuant type='number' min={1} max={100} value={quantidade} onChange={((e)=>{setQuatidade(e.target.value)})}  placeholder='Quantidade'/>
        </S.divChild>
        <S.input value='Comprar' onClick={()=> {
          setCarrinho((prev)=> [...prev,newCompra])
          console.log(carrinho)
          console.log('comprado')
        }}type='button'/>
      </S.divConteiner>
    </>
  )
}



export default CardItens
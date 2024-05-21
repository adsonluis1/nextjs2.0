'use client'
import * as S from './styled'

const CarrinhoItens = ({item}) => {
  const valorTotal = Number(item.quantidade) * item.price
  console.log(valorTotal)
  return (
    <>
    {item === '' && <S.H2>Carrinho vazio...</S.H2>}
    {item &&
          <S.DivContainer key={item.id}>
          <S.DivCompras>
            <S.Img src={item.img} alt={item.nome}/>
            <S.DivChild>
              <S.H2>{item.nome}</S.H2>
              <S.H2>R${item.price}</S.H2>
              <S.H2>{item.quantidade}</S.H2>
              {/* <S.H2>{valorTotal}</S.H2> */}
              <S.Button onClick={()=>{console.log('aaaa')}}>Finalizar compra</S.Button>
            </S.DivChild>
          </S.DivCompras>
        </S.DivContainer>
    }
    </>
  )
}

export default CarrinhoItens
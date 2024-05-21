'use client'
import * as S from './styled'

const CarrinhoItens = ({item}) => {
  return (
    <>
    {item === '' && <S.H2>Carrinho vazio...</S.H2>}
    {item &&
          <S.DivContainer key={item.id}>
          <S.DivCompras>
            <S.Img src={item.img.src} alt={item.nome}/>
            <S.DivChild>
              <S.H2>{item.nome}</S.H2>
              <S.H2>R${item.price}</S.H2>
              <S.H2>quantidade:{item.quantidade}</S.H2>
              <S.Button onClick={()=>{console.log('aaaa')}}>Finalizar compra</S.Button>
            </S.DivChild>
          </S.DivCompras>
        </S.DivContainer>
    }
    </>
  )
}

export default CarrinhoItens
import { useGetContext } from '@/hooks/Context'
import * as S from './styled'

const CarrinhoItens = () => {
  const carrin = []
  return (
    <>
    <S.H2>aaa</S.H2>
    {/* {carrinho.length == 0 && <S.H2>Carrinho vazio...</S.H2>} */}
    {carrin &&
      carrin.map((item)=>[
          <S.DivContainer key={item.id}>
          <S.DivCompras>
            <S.Img src={item.img.src} alt={item.nome}/>
            <S.DivChild>
              <S.H2>{item.nome}</S.H2>
              <S.H2>R${item.price}</S.H2>
              <S.H2>quantidade:{item.quantidade}</S.H2>
              <S.Button>Finalizar compra</S.Button>
            </S.DivChild>
          </S.DivCompras>
        </S.DivContainer>
      ])
    }
    </>
  )
}

// export async function getStaticProps() {
//   const {carrinho} = await useAppContext()
//   return {props:{carrinho}}
// }

export default CarrinhoItens
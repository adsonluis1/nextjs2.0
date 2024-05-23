import CarrinhoItens from '@/components/carrinhoItens/page'
import * as S from './styled'


// export async function getStaticProps () {
//     const {carrinho,setCarrinho} = await useAppContext()
//     return {props: {carrinho}}
// }


const Page = () => {  
  return (
    <S.Section>
      <S.H1>Carrinho</S.H1> 
       {/* {carrinho.length >= 1 && carrinho.map((item)=>[ */}
        <CarrinhoItens/>
      {/* ])}  */}
    </S.Section>
  )
}

export default Page
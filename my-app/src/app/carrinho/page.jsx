'use client'
import { useGetItensCar } from '@/hooks/useGetItensCar'
import * as S from './styled'
import CarrinhoItens from '@/components/carrinhoItens/page'
import { useAppContext } from '@/hooks/Context'


const Page = () => {  
  // const itens = await useGetItensCar()
  // console.log(itens)
  const {carrinho, setCarrinho} = useAppContext()
  console.log(carrinho)
  return (
    <S.Section>
      {/* <S.H1>Carrinho</S.H1> */}
      {carrinho.length >= 1 && carrinho.map((item)=>[
        <CarrinhoItens key={item.id} item={item}/>
      ])}
    </S.Section>
  )
}

export default Page
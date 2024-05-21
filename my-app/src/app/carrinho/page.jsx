import { useGetItensCar } from '@/hooks/useGetItensCar'
import * as S from './styled'
import CarrinhoItens from '@/components/carrinhoItens/page'


const page =  async () => {  
  const itens = await useGetItensCar()
  console.log(itens)
  return (
    <S.Section>
      <S.H1>Carrinho</S.H1>
      {itens.map((item)=>[
        <CarrinhoItens item={item}/>
      ])}
    </S.Section>
  )
}

export default page
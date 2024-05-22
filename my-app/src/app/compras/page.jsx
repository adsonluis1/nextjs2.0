import CardItens from '@/components/cardItens/page'
import * as S from './styled'
import { useGetItens } from '@/hooks/useGetItens'
import Page from '../carrinho/page'


const page = async () => {
    const itens = await useGetItens()
  return (
    <>
    <S.Section>
      {itens.map((item)=>[
        <CardItens produc={item}/>
      ])}
    </S.Section>
    <Page/>
    </>
  )
}

export default page
import CardItens from '@/components/cardItens/page'
import * as S from './styled'
import { useGetItens } from '@/hooks/useGetItens'


const page = async () => {
    const itens = await useGetItens()
  return (
    <>
    <S.Section>
      {itens.map((item)=>[
        <CardItens produc={item}/>
      ])}
    </S.Section>
    </>
  )
}

export default page
import CardItens from '@/components/cardItens/page'
import * as S from './styled'


const page = () => {
  const itens = [
    {img:{
      src:'https://tse4.mm.bing.net/th?id=OIP.0bw4J1GInyXdrWoYz5ATzAHaHa&pid=Api&P=0&h=180',
      alt:'Camisa gola V'
    },
    nome:'Camisa gola V',
    price:90.00,
    key:1
  },
  {img:{
    src:'https://tse1.mm.bing.net/th?id=OIP.DEA0GtavPfWbYPT40H4fagHaE0&pid=Api&P=0&h=180',
    alt:'Tenis de corrida'
  },
  nome:'Tenis De Corrida',
  price:200.00,
  key:2
},
  {img:{
    src:'https://tse4.mm.bing.net/th?id=OIP.V6-iEGboDwFJNBb5iE4aJQHaHa&pid=Api&P=0&h=180',
    alt:'Short Academia'
  },
  nome:'Short Academia',
  price:65.00,
  key:3
  }
  ]
  
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
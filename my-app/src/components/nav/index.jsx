import Link from "next/link"
import * as S from "./styled"

const Nav = () => {
    const links = [
        {nome:'Home',link:'/'},
        {nome:'Carrinho',link:'/carrinho'},
        {nome:'Compras',link:'/compras'},
        {nome:'About',link:'/about'},
      ]
    return (
    <S.Nav>
        {links.map((link)=>[
          <Link key={link.nome} href={link.link}>{link.nome}</Link>
        ])}
    </S.Nav>
  )
}

export default Nav
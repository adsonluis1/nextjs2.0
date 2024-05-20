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
            <S.Link key={link.nome} className={link.class} href={link.link}>{link.nome}</S.Link>
        ])}
    </S.Nav>
  )
}

export default Nav
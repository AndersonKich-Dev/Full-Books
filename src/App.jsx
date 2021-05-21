import React from 'react'
import * as S from './styles/AppStyle'
import { GiBookPile} from 'react-icons/gi'
import ligthTheme from './themes/light'
import { ThemeProvider } from 'styled-components'
import Routes from './config/routes'
import Search from './components/Search-component'
import Hamburguer from './components/Hamburger-component'
import Favorite from './components/Favorite-component'
import { useGlobalContext } from './Context/GlobalContext'

export default function App(){

  const { toogleMenuMobile } = useGlobalContext()

  return (
    <ThemeProvider theme={ligthTheme}>
      <S.Container>
        <S.Header>
            <GiBookPile/>
            <h1>full books</h1>
            <Hamburguer/>
        </S.Header>

        <S.Menu displayMenu={toogleMenuMobile}>
            <S.UlMenu>
              <S.LiMenu>
                <Search/>
              </S.LiMenu>
              
              <S.LiMenu>
                <Favorite/>
              </S.LiMenu>             
            </S.UlMenu>
        </S.Menu>

        <S.Main>
            <Routes/>
        </S.Main>
      </S.Container>
    </ThemeProvider>
  );
}



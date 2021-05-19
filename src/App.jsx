import React from 'react'
import * as S from './styles/AppStyle'
import { GiBookPile} from 'react-icons/gi'
import ligthTheme from './themes/light'
import { ThemeProvider } from 'styled-components'

import Search from './components/Search-component'

export default function App(){
  return (
    <ThemeProvider theme={ligthTheme}>
      <S.Container>
        <S.Header>
            <GiBookPile/>
            <h1>full books</h1>
        </S.Header>

        <S.Menu>
            <Search/>
        </S.Menu>

        <S.Main>
            <h1>Content</h1>
        </S.Main>
      </S.Container>
    </ThemeProvider>
  );
}



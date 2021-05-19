import React from 'react'
import { Container } from './styles/AppStyle'
import ligthTheme from './themes/light'
import { ThemeProvider } from 'styled-components'
import HomeView from './views/home'

export default function App(){
  return (
    <ThemeProvider theme={ligthTheme}>
      <Container>
        <HomeView/>
      </Container>
    </ThemeProvider>
  );
}



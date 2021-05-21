import React from 'react'
import { Container } from './styles'
import { useGlobalContext } from '../../Context/GlobalContext'

export default function Hamburguer(){

    const { setToogleMenuMobile, toogleMenuMobile } = useGlobalContext()

    return(
      <Container toogle={toogleMenuMobile}>           
        <div onClick={()=> setToogleMenuMobile(!toogleMenuMobile)}>
          <span></span>
        </div>           
      </Container>
    )
}



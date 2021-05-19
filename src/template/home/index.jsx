import React from 'react'
import { GiBookPile} from 'react-icons/gi'
import * as S from './styles'

import Search from '../../components/Search-component'

export default function Home(){


    return(
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
    )
}
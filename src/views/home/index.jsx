import React from 'react'
import { GiBookPile} from 'react-icons/gi'
import * as S from './styles'

export default function Home(){


    return(
        <S.Container>
            <S.Header>
                <GiBookPile/>
                <h1>full books</h1>
            </S.Header>

            <S.Main>

            </S.Main>
        </S.Container>
    )
}
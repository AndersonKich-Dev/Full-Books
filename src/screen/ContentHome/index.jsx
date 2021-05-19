import React from 'react'
import * as S from './styles'
import { useGlobalContext } from '../../Context/GlobalContext'

export default function Test01(){
    const { fullBooks, handleListBooks } = useGlobalContext();


    return(
        <S.Container>
            {!fullBooks ?   
                <S.Welcome>
                    <h1>Welcome</h1>
                    <p>
                        Feel free to select your favorite book in the search bar 
                        or see some copies on our homepage by clicking the button
                        below. Have a great read.
                    </p>

                    <button onClick={() => handleListBooks('React')}>Library</button>
                </S.Welcome> 
                : 
                <h1>Screen Home Content full books</h1>
            }
           
            
        </S.Container>
    )
}
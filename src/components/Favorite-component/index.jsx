import React from 'react'
import { Container } from './styles'
import { BiBookBookmark } from 'react-icons/bi'
import { useGlobalContext } from '../../Context/GlobalContext'

export default function Test01(){

    const { favoriteList, setIdView } = useGlobalContext()


    return(
        <Container>
            <span>
                <p>Favorites</p>
            </span>
            <ul>
                {favoriteList.map((item, index)=>(
                    <li onClick={()=>setIdView(item.id)} key={index}>                      
                        <BiBookBookmark/>
                        <p>{item.title}</p>                      
                    </li>
                ))}
            </ul>
           
            
        </Container>
    )
}
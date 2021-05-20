import React from 'react'
import { Container, BorderIcon } from './styles'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../../Context/GlobalContext'


export default function Search(){
    const { handleListBooks, search, setSearch } = useGlobalContext()
    
    return(
        <Container>   
            <input 
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder='Search'
            />  
            <BorderIcon>
                <div>
                    <FaSearch onClick={() => handleListBooks(search, true)}/>   
                </div>
            </BorderIcon>      
                   
            
        </Container>
    )
}
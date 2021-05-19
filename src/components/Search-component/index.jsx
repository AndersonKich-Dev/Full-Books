import React, { useState } from 'react'
import { Container } from './styles'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../../Context/GlobalContext'


export default function Search(){
    const [search, setSearch] = useState('')
    const { handleListBooks } = useGlobalContext()

    return(
        <Container>           
            <FaSearch onClick={() => handleListBooks(search)}/>          
            <input 
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder='Search'
            />
        </Container>
    )
}
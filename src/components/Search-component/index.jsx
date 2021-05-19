import React from 'react'
import { Container } from './styles'
import { FaSearch } from 'react-icons/fa'

export default function Search(){


    return(
        <Container>           
            <FaSearch/>          
            <input placeholder='Search'/>
        </Container>
    )
}
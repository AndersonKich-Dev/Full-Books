import React, { useState, useEffect } from 'react'
import * as S from './styles'



export default function Search({book}){
    const [image, setImage] = useState('')
    const [publishedDate, setPublishedDate] = useState('')
    const [title, setTitle] = useState('')

    const createCard = ()=>{
        if(book.volumeInfo.imageLinks){
            setImage(book.volumeInfo.imageLinks.thumbnail)
        }
        else{
            setImage('https://islandpress.org/sites/default/files/default_book_cover_2015.jpg')
        }
        
        setPublishedDate(book.volumeInfo.publishedDate)
        setTitle(book.volumeInfo.title)
    }

    useEffect(()=>{
        createCard()
    },[book])

    return(
        <S.Container>  
            <S.ImageBox>
                <img src={image}/>
            </S.ImageBox>

            <S.TitleBox>
                <p>{title}</p>
                <span>{publishedDate}</span>
            </S.TitleBox>
        </S.Container>
    )
}
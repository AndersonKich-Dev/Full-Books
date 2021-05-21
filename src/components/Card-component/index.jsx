import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar} from 'react-icons/fa'
import { useGlobalContext } from '../../Context/GlobalContext'


export default function Search({book}){
    const [image, setImage] = useState('')
    const [publishedDate, setPublishedDate] = useState('')
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')
    const [favoriteBook, setFavoriteBook] = useState('')

    const { saveFavoriteBook, getFavoriteBook, setFavoriteList, favoriteList, removeFavoriteBook } = useGlobalContext()

    const createCard = ()=>{
        if(book.volumeInfo.imageLinks){
            setImage(book.volumeInfo.imageLinks.thumbnail)
        }
        else{
            setImage('https://islandpress.org/sites/default/files/default_book_cover_2015.jpg')
        }
        
        setPublishedDate(book.volumeInfo.publishedDate) 
        setTitle(book.volumeInfo.title)
        setId(book.id)
        const CheckFavorite =  getFavoriteBook(book.id)
        setFavoriteBook(CheckFavorite)
    }

    

    useEffect(()=>{
        createCard()
    },[book])

    return(
        <S.Container> 
            <Link to={`/book/${id}`}>              
                 <img src={image}/>              
            </Link> 
            <S.TitleBox>
                <p>{title}</p>
                <span>{publishedDate}</span>
                {!favoriteBook 
                    ? <FaRegStar/>
                    : <FaStar/>
                }
            </S.TitleBox>
        </S.Container>
    )
}
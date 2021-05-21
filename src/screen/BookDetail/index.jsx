import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles'
import api from '../../services/api'
import { BiArrowBack } from 'react-icons/bi'
import { FaRegStar, FaStar} from 'react-icons/fa'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { useGlobalContext } from '../../Context/GlobalContext'

export default function BookDetail( props ){
    const [id, setId] = useState('')
    const [image, setImage] = useState('')
    const [publishedDate, setPublishedDate] = useState('')
    const [title, setTitle] = useState('')
    const [authors, setAuthors] = useState('')
    const [description, setdescription] = useState('')
    const [favoriteBook, setFavoriteBook] = useState('')

    const { saveFavoriteBook, getFavoriteBook, removeFavoriteBook } = useGlobalContext()

    useEffect(()=>{
        updateId()
    },[favoriteBook])

    const updateId=()=>{
        const id = props.match.params.id
        const favorite =  getFavoriteBook(id)
        setFavoriteBook(favorite)
        setId(id)
        handleGetBookId(id)
    }

    const handleGetBookId = (id)=>{
        api.get(`/volumes/${id}`)
        .then(response => {
            console.log(response.data)
            createBookCard(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const createBookCard= (book)=>{
        if(book.volumeInfo.imageLinks){
            setImage(book.volumeInfo.imageLinks.thumbnail)
        }
        else{
            setImage('https://islandpress.org/sites/default/files/default_book_cover_2015.jpg')
        }
        const authorsString = book.volumeInfo.authors.toString();
        setAuthors(authorsString)
        const published = format(Date.parse(book.volumeInfo.publishedDate), 'd, MMMM, yyyy',{
            locale: ptBR,
        });
        setPublishedDate(published.replaceAll(',', ' de '))
        setTitle(book.volumeInfo.title)
        setdescription(book.volumeInfo.description)
        
    }

    const toogleFavorite = (value)=>{
        if(!value){
            removeFavoriteBook(id)
            setFavoriteBook(null)
        }
        else{
            saveFavoriteBook(id, title)
            setFavoriteBook(title)
        }
    }

    return(
        <S.Container>
           
            <S.BookCard>
                <S.ImageCard>
                <S.ArrowBack>
                <Link to='/'>
                    <BiArrowBack/>
                </Link>
            </S.ArrowBack>
                    <img src={image}/>
                    <S.FavoriteIcon>
                        {!favoriteBook 
                            ? <FaRegStar onClick={()=>toogleFavorite(true)}/>
                            : <FaStar onClick={()=>toogleFavorite(false)}/>
                        }
                        {!favoriteBook 
                            ? <p>Add favorite</p>
                            : <p>Remove favorite</p>
                        }
                    </S.FavoriteIcon>
                </S.ImageCard>

                

                <S.DescriptionContainer>                   
                    <h1>{title}</h1>  
                    <p>Authors: {authors}</p> 
                    <p>{publishedDate}</p> 
                    <S.Description>
                        <h2>Description:</h2>
                        <div dangerouslySetInnerHTML={{__html:description}}/>      
                    </S.Description>
                         
                </S.DescriptionContainer>
            </S.BookCard>
        </S.Container>
    )
}
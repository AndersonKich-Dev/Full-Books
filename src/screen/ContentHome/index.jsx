import React, { useEffect } from 'react'
import * as S from './styles'
import {Link , useHistory} from 'react-router-dom';
import Card from '../../components/Card-component'
import Paginate from '../../components/Paginate-component'
import { useGlobalContext } from '../../Context/GlobalContext'

export default function Test01(){
    const { listForBooks, currentPage, handleListBooks, setSearch, setScreenWidth,setIdView,  idView} = useGlobalContext();

    const history = useHistory();
    const firstSearch=()=>{
        setSearch('tecnologia')
        handleListBooks('tecnologia', true)
    }

    useEffect(()=>{
        setScreenWidth(window.innerWidth);
      },[window.innerWidth])
    
      useEffect(()=>{
        if(idView !== null){
            history.push(`/book/${idView}`);
        }
        setIdView(null)
      },[idView])

    return(
        <S.Container>
            {!currentPage ?   
                <S.Welcome>
                    <h1>Welcome</h1>
                    <p>
                        Feel free to select your favorite book in the search bar 
                        or see some copies on our homepage by clicking the button
                        below. Have a great read.
                    </p>

                    <button onClick={firstSearch}>Library</button>
                </S.Welcome> 
                : 
                <S.ContainerCards>
                    {listForBooks.map(( item, index )=>(
                        <Card key={index} book={item}/>
                    ))}
                </S.ContainerCards>
            }
          <Paginate/>
            
        </S.Container>
    )
}
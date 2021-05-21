import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

export const GlobalContext = createContext({})

export default function GlobalContexProvider({children}){

    const [listForBooks, setListForBooks] = useState('')
    const [search, setSearch] = useState('')
    const [next, setNext] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [pageRelease, setPageRelease] = useState(0)
    const [pagesArray, setPagesArray] = useState([])
    const [maxResult, setMaxResult] = useState(10)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [toogleMenuMobile, setToogleMenuMobile] =useState(false)

    const newPaginate = (totalPages, newSearch)=>{
        let array = []
        let valueAux = 0
        let totalPagination = 0;
        screenWidth <= 700 ? totalPagination = 3 : totalPagination = 8;

        if(newSearch){
            setTotalPages(totalPages)
            setCurrentPage(1)
            setNext(0)
            
            totalPages >= totalPagination ? valueAux = totalPagination : valueAux = totalPages

            for(let i = 1; i <= valueAux ; i++){
                i === 1  
                ? array.push({index: i, value: true}) 
                : array.push({index: i, value: false})               
            }
            setPagesArray(array)
        }

    }

    const handleNextPage = () =>{
        let array = pagesArray
        if(currentPage !== totalPages){
            array.forEach(item => {
                item.index === currentPage + 1 
                    ?item.value = true
                    : item.value = false
             });
            setPagesArray(array)
            setCurrentPage(current => current + 1)
            setNext(next => next + maxResult)
        }
        else{
            setCurrentPage(current => current)
            setNext(next => next)
        }
        setPageRelease(release => release +1)
    }

    const handlePreviousPage = () =>{
        let array = pagesArray
        if(currentPage <= 1){
            setCurrentPage(current => current)
            setNext(0) 
        }else{
            setCurrentPage(current => current - 1)
            setNext(next => next - maxResult)
            array.forEach(item => {
                item.index === currentPage - 1 
                    ?item.value = true
                    : item.value = false
             });

            setPagesArray(array)
        }
        setPageRelease(release => release - 1)
    }

    useEffect(()=>{
        if(search){
            handleListBooks(search, false)
        }   
    },[pageRelease])
         
    const handleListBooks=( string, newSearch )=>{
        api.get('/volumes', {
            params: {
                q: `${string}`,
                printType: 'books',
                startIndex: next,
                maxResults: maxResult,
                orderBy: 'newest',                
            }
        })
        .then(response => {
            console.log(response.data)
            setListForBooks(response.data.items)
            newPaginate(Math.ceil(response.data.totalItems / 10),newSearch)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return(
        <GlobalContext.Provider value={{
            listForBooks,
            search,
            next,
            totalPages,
            currentPage,
            pagesArray,
            toogleMenuMobile,
            screenWidth,
            setScreenWidth,
            setToogleMenuMobile,
            setSearch,
            handleListBooks,
            handleNextPage,
            handlePreviousPage
        }}>

            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
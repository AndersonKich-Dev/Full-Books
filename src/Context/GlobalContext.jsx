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


    const newPaginate = (totalPages, newSearch)=>{
        let array = []
        let valueAux = 0

        if(newSearch){
            setTotalPages(totalPages)
            setCurrentPage(1)
            setNext(0)
            
            totalPages >= 10 ? valueAux = 10 : valueAux = totalPages

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
            setNext(next => next + 10)
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
            setNext(next => next - 10)
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
                maxResults: 10,
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
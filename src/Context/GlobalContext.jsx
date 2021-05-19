import { createContext, useContext, useState } from 'react'
import api from '../services/api'

export const GlobalContext = createContext({})

export default function GlobalContexProvider({children}){

    const [fullBooks, setFullBooks] = useState('')

    const handleListBooks=( string )=>{
        api.get('/volumes', {
            params: {
                q: string,
                printType: 'books',
            }
        })
        .then(response => {
            console.log(response.data)
            setFullBooks(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return(
        <GlobalContext.Provider value={{
            fullBooks,
            setFullBooks,
            handleListBooks
        }}>

            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
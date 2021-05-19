import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})

export default function GlobalContexProvider({Children}){

    const [book, setBook] = useState('')



    return(
        <GlobalContext.Provider value={{
            book,
            setBook
        }}>

            { Children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
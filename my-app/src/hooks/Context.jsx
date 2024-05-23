'use client'

import { createContext, useContext, useState } from "react"

export const Context = createContext()

export const ContextProviber = ({children})=>{
    const [carrinho, setCarrinho] = useState([])
    return <Context.Provider value={{carrinho, setCarrinho}}>{children}</Context.Provider>
}

export const useGetContext = ()=>{
    const data = useContext(Context)
    return data
}
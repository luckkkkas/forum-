import { createContext, useContext, useEffect, useState } from "react"
import { IContext } from "./types"
import { getData } from "../services/api"

export const AppContext = createContext({}as IContext)


export const AppContextProvider = ({children}:any) => {
    const[user,setUser] = useState({} as IContext)    
    useEffect(()=>{
        const getUser = async () => {
            const data = await getData()
            setUser(data);
        }
        getUser()
    },[]) 
    
    return(
        <AppContext.Provider value={{user}}>
            { children }
        </AppContext.Provider>
    )
}
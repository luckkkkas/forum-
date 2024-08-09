import {Home} from "../pages/Home"
import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Account } from "../pages/Account"
import { getLocalStorage } from "./storage/storage"


export const MainRoutes = () => {
    const isValid = getLocalStorage('valid')

    return(
        <Routes>
            <Route path="/" element={isValid === "true" ? <Home/> : <Login/>}/>
            <Route path="/Login" element={ <Login/>}/>
            <Route path="/Account" element={isValid === 'true' ? <Account/> : <Login/>}/>
        </Routes>
    )
}
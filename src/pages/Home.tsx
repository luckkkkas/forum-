import { useNavigate } from "react-router-dom"
import { changeLocalStorage, getLocalStorage } from "../services/storage/storage"
import { AppContext } from "../context/Context"
import { useContext } from "react";
import { Button } from "@chakra-ui/react";


export const Home = () => {
    const { user } = useContext(AppContext);
    const validUser = getLocalStorage('valid')
    const navigate = useNavigate()
    if (validUser === '"false"'){navigate('/Login')}
    const logout = () => {
        changeLocalStorage('valid', false);
        navigate('/login');

    }

    return(
        <>
            <h1>{user.users.name}</h1>
            <h1>{user.users.id}</h1>
            <h1>{user.users.user}</h1>
            <h1>{user.users.password}</h1>
            <h1>{user.users.email}</h1>

            <Button onClick={() => logout()}>Exit</Button>
        </>
    )
}
import { Box, Button, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { validateUser } from "../services/validateUser";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage/storage";

export const Login = () => {

    const [email, setEmail] = useState('lucas@mail.com');
    const [password, setPassword] = useState('123');
    const navigate = useNavigate();
    let [emailInvalid, setInvalidEmail] = useState(false)
    let [passInvalid, setInvalidPass] = useState(false)

    const validUser = async () => {
        if (!await validateUser(email, password)) {
            setInvalidEmail(true)
            setInvalidPass(true)
            return null
        }
        
        navigate('/');
        changeLocalStorage('valid', true);
    }


    return (
        <Box h={'100vh'} >
            <SimpleGrid w={'50vw'} m={'auto'} pt={'30vh'} >
                <Input
                    placeholder="Email or User"
                    variant="flushed"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                />
                {emailInvalid ? <Text fontSize='xs' color={'red'}>email invalid</Text> : null}
                <Input
                    placeholder="Password"
                    variant="flushed"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                />
                {passInvalid ? <Text fontSize='xs' color={'red'}>Password invalid</Text> : null}
                <Button mt={10} onClick={() => validUser()} colorScheme="yellow" >Login</Button>
            </SimpleGrid>
        </Box>
    )
}
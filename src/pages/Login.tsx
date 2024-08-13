import { Box, Button, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useForm , SubmitHandler } from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface IFormInput {
    email: string
    password: string
  }

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  })
  .required()

export const Login = () => {
    
    const { register , handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})   
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    


    return (
        <Box h={'100vh'} >
            <SimpleGrid w={'50vw'} m={'auto'} pt={'30vh'} >
                <form onSubmit = { handleSubmit ( onSubmit as any) } >
                    <Input
                        placeholder="Email or User"
                        variant="flushed"
                        type="email"
                        {...register('email', {required:true})}
                    />
                    <Text color={"red"}>{errors.email?.message}</Text>
                    <Input
                        placeholder="Password"
                        variant="flushed"
                        type="password"
                        {...register('password', {required: true})}
                    />
                    <Text color={'red'}>{errors.password?.message}</Text>
                    <Button colorScheme="blue" type="submit" >Login</Button>
                </form>
            </SimpleGrid>
        </Box>
    )
}
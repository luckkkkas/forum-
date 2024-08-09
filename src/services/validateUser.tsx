import { getData } from "./api";
import { changeLocalStorage } from "./storage/storage";


export async function validateUser(email:string, password: string){
    if(await validateEmail(email) && await validatePassword(password)){
        console.log('logado')
        changeLocalStorage("valid",true)
        return true
    }
    console.log(false)
    changeLocalStorage("valid",false)
}

async function validateEmail(email:string){
    const user = await getUser()
    if(email !== user.users.email){   
        return false;
    }
    return true;
}

async function validatePassword(password:string){
    const user = await getUser()
    if(password !== user.users.password){
        return false
    }
    return true;
}

async function getUser(){
    const user = await getData();
    return user
}

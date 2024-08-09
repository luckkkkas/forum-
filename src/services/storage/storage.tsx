const storage = localStorage;

export function getLocalStorage(valid:string){
    return storage.getItem(valid);
}

export function changeLocalStorage(name:string, value:boolean){
    localStorage.setItem(name, JSON.stringify(value));
}

export function createLocalStorage(){
    localStorage.setItem("login", 'false')
}
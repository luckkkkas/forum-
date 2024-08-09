import { validateUser } from "./validateUser"



describe("validaUser", () =>{
    it('Deve retornar true para valore corretos',() => {
        const value = validateUser('email', "senha")
        expect(value).toBeTruthy;
    })

    it('Deve retornar false para valores incorretos',() => {
        const value = validateUser('emai', "senh")
        expect(value).toBeFalsy;
    })
})
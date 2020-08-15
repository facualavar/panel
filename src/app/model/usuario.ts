import { Perfil } from './perfil'
export class Usuario {
    id: number;
    nombres: string;
    apellidos: string;
    userName: string;
    password: string;
    email: string;
    telefono: string;
    perfil: Perfil;

    constructor(nomb?:string, ape?:string, usr?:string, pass?:string, email?:string, perfil?:Perfil, tel?:string){

        this.nombres = nomb;
        this.apellidos = ape;
        this.userName = usr;
        this.password = pass;
        this.email = email;
        this.perfil = perfil;
        this.telefono = tel;
    }
}

import { Departement } from "./departement";
import { Module } from "./module";

export class Enseignant {
    idEnseignant!:number;
    prenomE!:string;
    nomE!:string;
    date_prise_de_fonction!:Date;
    email!:string;
    image!:string;
    grade!:string;
    departement!:Departement;
    module!:Module;
    moduleRes!:Module;
}

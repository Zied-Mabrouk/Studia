import { Etudiant } from "./etudiant";
import { Universite } from "./universite";


export class Club {
    idClub!:number;
    nomClub!:String;
    description!:String;
    date_creation!:any;
    etudiants!:Set<Etudiant>;
    universite!:Universite;
    contacts!:Number;
    email!:String;
}

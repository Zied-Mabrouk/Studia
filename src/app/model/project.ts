import { Equipe } from "./equipe";

export class Project {
    idProject! : number;
    nameProject! : string;
    descriptionProject! : string;
    deadLine! : any;
    statusProject! : string;
    team!: Equipe;
}

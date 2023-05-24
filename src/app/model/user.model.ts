export class UserModel {
    id! : number;
    name! : string;
    role! : string;
    salary! : string;
    createdAt! : string;
    active! : boolean;

    constructor(response : any) {
        this.id = response.id
        this.name = response.name
        this.role = response.role   
        this.salary = response.salary
        this.createdAt = response.createdAt
        this.active = response.active
    }
}
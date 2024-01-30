export class Categorie {
    id : number ; 
    name : String ;
    addedAt : Date ; 

    constructor( id : number ,name : String , addedAt : Date ){
        this.id = id;
        this.name = name ; 
        this.addedAt = addedAt ; 
    }
}
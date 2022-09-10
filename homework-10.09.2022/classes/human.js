export class Human{
    constructor(name, sName, hiWord){
        this.name = name
        this.sName = sName
        this.hiMethod = ()=>{console.log(hiWord);}
    }
}
import { Human } from "./human";

export class Sysadmin extends Human{
    constructor(...args){
        super(...args)
        this.hvostik = true
        this.healPc=()=>{console.log("Ya pochenil!!!!! Poshaly molly top");}
    }
}
import { Sysadmin } from "./sysadmin";

export class Developer extends Sysadmin{
    constructor(...args){
        super(...args)
        this.writeCode=()=>{console.log("i am writing the code");}
    }
}
import { Developer } from "./classes/developer";
import { Human } from "./classes/human";
import { Sysadmin } from "./classes/sysadmin";

const human = new Human("Tymur", "MArenych", "hi")
const sysadmin = new Sysadmin("Vana", "Sydorov", "Доброго вечораб, ми з України!")
const developer = new Developer("Kirill", "Kosmos", "Я заставлю вас работать! >:(")


console.log('%cmain.js line:9 human', 'color: #007acc;', human);
console.log('%cmain.js line:10 sysadmin', 'color: #007acc;', sysadmin);
console.log('%cmain.js line:11 developer', 'color: #007acc;', developer);

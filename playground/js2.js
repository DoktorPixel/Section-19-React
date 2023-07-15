// import {...}
import { months, STANDARD_YEAR, sayHi, sayBye } from "./js1.js";

console.log(months);
console.log(months[8]);

console.log(STANDARD_YEAR);
console.log(sayHi("John"));
console.log(sayBye("John"));

// Импорт «как» . Мы также можем использовать as, чтобы импортировать под другими именами.
import { sayHi as hello } from "./js1.js";
console.log (hello ("Sandra!"))

//
import User1 from './js1.js'; // не {User}, ,без скобок просто User для export default они не нужны.

new User1('Johnatan');

console.log('Johnatan')

// Реэкспорт
import User1 from './js1.js'
export {User1}
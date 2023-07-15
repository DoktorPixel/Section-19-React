// экспорт массива
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// экспорт константы
export const STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}

//Экспорт отдельно от объявления
function sayHi(user) {
  console.log(`Hello, ${user}!`);
  return user;
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
  return user;
}

export { sayHi, sayBye };

//
//Экспорт по умолчанию
export default class User1 {
  // просто добавьте "default"
  constructor(name) {
    this.name = name;
  }
}
// в файле может быть не более одного export default.
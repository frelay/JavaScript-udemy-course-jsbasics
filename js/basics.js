'use strict';

let hello = 'hello';
console.log(hello);

// Объект
const myObj = {
  name: 'Pavel',
  age: 34,
  isMarried: false
};
myObj.weight = 72; // Добавление ключа и значения в объект
console.log(myObj.weight); // Обращение к элементу объекта

// Массив
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]); // обращение к элементу массива

// Модальное окно, на которое можно ответить 'Ok' или 'Отмена'
const result = confirm('Are you here?');
console.log(result);

// Модальное окно с полем для ввода, второй параметр добавляет 
// значение по умолчанию
const answer = prompt('Вам есть 18?', '18');
console.log(typeof(answer)); // В переменную записывается всегда строка!

// Запись данных в массив
const answers = [];
answers[0] = prompt('Как вас зовут?', ''); 
answers[1] = prompt('Ваша фамилия?', ''); 
// Плюс преобразовывает строку в число
answers[2] = +prompt('Сколько вам лет?', ''); 
// Перебор массива циклом for
for(let i = 0; i <= answers.length; i++){
  console.log(answers[i]);
}

// Интерполяция
const category = 'toys';
console.log(`https://ozon.com//${category}/5`);

// Условия

const num = 50;

if (num == 49 ) {
  console.log('Error');
} else if (num == 100) {
  console.log('Много');
} else {
  console.log('Ok');
}

// Тернарный оператор 

(num === 50) ? console.log('Ok') : console.log('Error');

// Switch аналог if else

switch(num) {
  case 49:
    console.log('Error');
    break;
  case 100:
    console.log('Много');
    break;
  case 50:
    console.log('Ok');
    break;  
  default:
    console.log('WTF');
    break;
}

// Циклы

let int = 50;

while (int < 55) {
  console.log(int);
  int++;
}

for (let i = 0; i < 10; i++){
  if (i === 9){
    break; // Останавливает цикл
  } else if (i === 5){
    continue; // Пропускает итерацию
  }
  console.log(i);
}

// Функции

function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage('Hello');

function calc(a, b) {
  return(a + b);
}

console.log(calc(4, 5));

function ret() {
  let num = 50;
  return num;
}
const resultRet = ret();
console.log(resultRet);
// Такую функцию нельзя вызвать перед созданием
const logger = function() {
  console.log('Hello');
};

logger();

// Стелочные функции

const calculator = (a, b) => a + b;
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

// Callback функции, когда функция принимает параметром функцию

function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок.');
}

learnJS('JavaScript', done); // колбэк в параметре без скобок

// Методы и свойства строк и чисел
// Свойства без круглых скобок
const str = 'Hello world';
console.log(str.length); // lenght возвращает длинну строки или массива
console.log(str.toUpperCase()); // Возвращает строку в верхнем регистре
console.log(str.toLowerCase());// Возвращает строку в нижнем регистре
console.log(str.indexOf('ell')); // Возвращает индекс с которого начинается подстрока
console.log(str.slice(0, 3)); // Возвращает срез по индексам
console.log(str.substring(0, 3)); // Тоже самое что и slice только не поддерживает отрицательные индесы
console.log(str.substr(0, 3)); // Второй параметр указывает сколько элементов вырезать

// Свойства чисел

const number = 12.5;
const pixels = '12.2px';
console.log(Math.round(number)); // Округляет число
console.log(parseInt(pixels)); // Преобразует строку в число
console.log(parseFloat(pixels)); // Преобразует строку в число c плавающей точкой

// Объекты

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('test');
  }
};

console.log(options.name);
options.makeTest();
delete options.name; // удаление элемента 

console.log(options);
// Перебор объекта
let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    } 
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }  
}
console.log(Object.keys(options).length); // возвращает ключи объекта
console.log(counter);
// Деструктуризация объекта
const {border, bg} = options.colors; // Деструктуризация
console.log(border);
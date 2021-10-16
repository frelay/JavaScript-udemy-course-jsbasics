// 'use strict';

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
console.log(typeof (answer)); // В переменную записывается всегда строка!

// Запись данных в массив
const answers = [];
answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Ваша фамилия?', '');
// Плюс преобразовывает строку в число
answers[2] = +prompt('Сколько вам лет?', '');
// Перебор массива циклом for
for (let i = 0; i <= answers.length; i++) {
  console.log(answers[i]);
}

// Интерполяция
const category = 'toys';
console.log(`https://ozon.com//${category}/5`);

// Условия

const num = 50;

if (num == 49) {
  console.log('Error');
} else if (num == 100) {
  console.log('Много');
} else {
  console.log('Ok');
}

// Тернарный оператор 

(num === 50) ? console.log('Ok'): console.log('Error');

// Switch аналог if else

switch (num) {
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

for (let i = 0; i < 10; i++) {
  if (i === 9) {
    break; // Останавливает цикл
  } else if (i === 5) {
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
  return (a + b);
}

console.log(calc(4, 5));

function ret() {
  let num = 50;
  return num;
}
const resultRet = ret();
console.log(resultRet);
// Такую функцию нельзя вызвать перед созданием
const logger = function () {
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

// Функции-конструкторы(как конструктор класса)

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = () => {
    console.log(`Hello ${this.name}`);
  };
}

// Добавление метода объекту
User.prototype.exit = function() {
  console.log(`Пользователь ${this.name} ушел`);
};

const pavel = new User('Pavel', 34);
pavel.hello();
pavel.exit();

// Контекст вызова. This
// 1. Обычная функция: this = window, но если use strict = undefined
// 2. Контекст у методов объекта = сам объект
// 3. this в конструкторах и классах = новый экземпляр объекта
// 4. Ручная привязка this: call, apply, bind

function showThis(a, b) {
  console.log(this);
  function sum(){
    console.log(this);
    return this.a + this.b;
  }

  console.log(sum());
}

showThis(4, 5); // покажет в консоль window

// Методы и свойства строк и чисел
// Свойства без круглых скобок
const str = 'Hello world';
console.log(str.length); // lenght возвращает длинну строки или массива
console.log(str.toUpperCase()); // Возвращает строку в верхнем регистре
console.log(str.toLowerCase()); // Возвращает строку в нижнем регистре
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
  makeTest: function () {
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
  if (typeof (options[key]) === 'object') {
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
const {
  border,
  bg
} = options.colors; // Деструктуризация
console.log(border);

// Массивы

const array = [1, 2, 3, 6, 8];
array.pop(); // удаляет элемент с конца массива
console.log(array);
array.push(10); // добавляет элемент в конец массива
console.log(array);

// перебор массива
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let value of array) {
  console.log(value);
}

array.forEach(function (item, i, array) {
  console.log(`${i}: ${item} внутри массива ${array}`);
});

const string = "qqq, aaa, ttt";
const strArray = string.split(', '); // делит строку на элементы массива по разделителю
console.log(strArray);
console.log(strArray.join(', ')); // собирает массив в строку по разделителю
console.log(strArray.sort()); // сортирует массив

// Копирование объектов и массивов

const add = {
  a: 10,
  b: 15
};

const clone = Object.assign({}, add); // копируем в пустой объект, значения другого объекта

clone.b = 20;

console.log(add);
console.log(clone);

const oldArray = [1, 2, 3];
const newArray = oldArray.slice();

newArray[0] = 'aaa';

console.log(oldArray);
console.log(newArray);

// spread оператор

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook']; // три точки типа вываливают элементы массива в новый массив
console.log(internet);

// spread оператор можно передавать в параметры функции

const numArr = [1, 2, 3];

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

log(...numArr);

const q = {
  one: 1,
  two: 2
};

const newQ = {
  ...q
}; // копирование объектов и массивов можно тоже через spread оператор

// Основы ООП

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  }
};

const soldierJohn = Object.create(soldier);
soldierJohn.sayHello();
console.log(soldierJohn.health);

// Динамическая типизация

// Преобразование в строку
// 1
console.log(typeof(String(null)));
console.log(typeof(String(4)));
// 2
console.log(typeof(5 + '')); // конкатенация

// Преобразование в число
// 1
console.log(typeof(Number('4')));
// 2 
console.log(typeof(+'4'));
// 3
console.log(typeof(parseInt('15px', 10)));


// Преобразование в булиновый тип
// 1
// 0, '', null, undefined, NaN; - превращаются в false;
let switcher = null;
if (switcher) {
  console.log('Works');
}
// 2
console.log(typeof(Boolean('4')));
// 3 
console.log(typeof(!!'4'));

// Классы

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

// Наследование

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // Поля наследуются от родителя
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps(){
    console.log(`Текс: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const newSquare = new ColoredRectangleWithText(10, 10, 'Квадрат', 'red');

console.log(newSquare.calcArea());
newSquare.showMyProps();
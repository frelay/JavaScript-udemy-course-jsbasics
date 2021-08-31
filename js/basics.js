'use strict';

let hello = 'hello';
console.log(hello);

// Объект
const myObj = {
  name: 'Pavel',
  age: 34,
  isMarried: false
};

console.log(myObj.name); // Обращение к элементу объекта

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
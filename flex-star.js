/*
* TASKS - practice - tests
* this is practic test and another code for practice
* methods / functions / objects / code / algorithms / data / modules 
- много различных задач - практика как работает тот или иной метод 
- как реализовать определенные задачи или просто понять что из чего состоит как это попадает туда и исполняется
- со множеством тестов - тестирования кода программ 
- также является подсказкой в случае провала памяти _) в конце концов все запомнить нереально
- console.логи убраны 
.*/
// work in array 
const best_items = [
  'name',
  'age', 
  'work',
  'person'
];
//  проверить элемент на соответствие элементу в массиве
// some
const test_1 = best_items.some(test => test === 'work');
// REDUCE() применяет функцию которая в качестве аргумента имеет аккумулятор и значение 
// применяет функцию к аккумулятуру и каждому значению массива что бы в результате вернуть 
// одно значение последуюшее на следующее
const ownArrayBox = [3,3,3];
const test_2 = ownArrayBox.reduce((total, value) => total * value);
// every проверить на удовлетворение ВСЕХ элементов массива условию заданому в передава
// емой функции - Вернет true Если Каждый элемент совпадает с проверяемой функцией
// false если нет
const ownArrayBox2 = ['a','b','c'];
const test_3 = ownArrayBox2.every(test => test === 'b');
const ownArrayBox3 = ['a','a','a'];
const test_4 = ownArrayBox3.every(test => test === 'a');
// map = принимает функцию в качестве параметра и создает новый массив с результатом
// вызова указанной функции для каждого элемента массива. Всегда возвращает одинаковое кол во элементов
const ownArrayBox4 = [1,2,3,4,5,6,7];
const test_5 = ownArrayBox4.map(x => x * x);
//  flat сглаживает вложенные массивы в массив верхнего уровня метод работает только для одного уровня
const ownArrayBox5 = [[1,2], [5,4], 9];
const test_6 = ownArrayBox5.flat();
// filter - принимает функцию в качестве параметра возвр новый массив  сод все элементы 
// массива для которого функция фильтрации передавалась в качестве аргумента и возвращает его со 
// значением true;
const ownArrayBox6 = [
  { id: 1, name: 'john'},
  { id: 2, name: 'slavik'},
  { id: 3, name: 'john'},
  { id: 4, name: 'john'},
];
const test_7 = ownArrayBox6.filter(element => element.name === 'john');
// forEach = метод применяет функцию к каждому элементу массива 
const ownArrayBox7 = [
  {id: 1, name: 'Slavik'},
  {id: 2, name: 'Petr'},
  {id: 3, name: 'Georgii'},
]
// const test_8 = ownArrayBox7.forEach(elem => console.log(elem.name + ': ' + elem.id));
// fintIndex = метод принимает функ в качестве параметров и дальше применяет ее к массиву 
// он возвращает индекс найденого элемента если массив удовлетворяет условию пров функции перемданной в качестве эелемента
//  если нет return -1

const ownArrayBox8 = [
  {id: 1, name: 'slavik'},
  {id: 2, name: 'Geor'},
  {id: 3, name: 'Ingine'},
];
const test_9 = ownArrayBox8.findIndex(elem => elem.id === 2);
const test_10 = ownArrayBox8.findIndex(elem => elem.id === 7);
//  find - принимает функцию в кач аргумента и применяет ее к масиву он возвр
//  значение элемента найденого в массиве если элемент удовлетворяет условию проверяющей функции
// в противном случае undefined
const ownArrayBox9 = [
  {id: 1, name: 'jogn'},
  {id: 2, name: 'ali'},
  {id: 3, name: 'maks'},
];
const test_11 = ownArrayBox9.find(elem => elem.id === 3);
const test_12 = ownArrayBox8.find(elem => elem.id === 8); // undefined
/* 
* про обьекты 
*/
// objects
// way to create an object and set properties
const bTst = {};
bTst.contry = 'Atlantic-ocean';
bTst.age    = 1920;
bTst['fix']  = 'yes';
bTst['name'] = 'ocean-center-city';
bTst.getDaysDuck = function () { console.log(this.age) };
bTst.getDaysDuck();
// new obj ...
const std1 = {name: 'carl'};
const std2 = std1;
// ссылка на один элемент его мы и изменили
std2.name = 'fiix';
// создать клон - а не ссылку которую можно изменить
const std3 = {};
for(const key in std1) {
	std3[key] = std1[key];
}
//  значение name останется
std3.name = 'tunga';

// еще скопируем свойства 
const std4 = Object.assign({}, std1);

//
const animals = {
  name: 'cat',
  age: 12,
  good_: 'success',
  getD() {
    return this.name;
  }
};

const p_2age = {};
for(const key in animals) {
  p_2age[key] = animals[key];
}
p_2age['car_animal'] = 'cat2';

const key = 'url';
const app = {
  name: 'Yandex',
  [key]: 'https://yandex.ru/',
  ['get' + key.toUpperCase()]() {
    return this[key];
  }
};

const basex = Object.getOwnPropertyDescriptor(animals, 'name');
// краткая запись - short entry
// arrow method
const createReact = (width, height) => {
  // return object 
  return {
    width, // widht = widht
    height, // height = height
    calcArea() {
      return this.width * this.height;
    }
  } 
} 
const rect = createReact(10, 15); // 150
// regular func
function setDataSumm(s1, s2) {
  return {
    s1,
    s2,
    summReady() { // this 
      return this.s1 + this.s2;
    }
  }
}
const bitSumm = setDataSumm(10, 23);
// console.log(bitSumm.summReady());

// function 
var x = myfunction(4,32);

function myfunction(a, b) {
  return a * b;
}
// console.log(x);

/* set style in js*/
const ObjectCssdefault = {
  color: '#303030',
  backgroundColor: 'lightblue',
  fontFamily: 'calibri',
  ops: '1',
  fs: '19px',
  fw: 'bold',
};

function onreadyDomElems(){
  document.querySelector('.box-res-two').style.opacity = '1';
  document.querySelector('.box-res-two').style.backgroundColor = ObjectCssdefault.backgroundColor;
  document.querySelector('.box-res-two p').style.color = ObjectCssdefault.color;
  document.querySelector('.box-res-two p').style.opacity = ObjectCssdefault.ops;
  document.querySelector('.box-res-two p').style.fontSize = ObjectCssdefault.fs;
  document.querySelector('.box-res-two p').style.fontWeight = ObjectCssdefault.fw;
}
// create selector and generate dom and set style

document.querySelector('.push-content').addEventListener('click', function() {
  // test_dom();
  let b = document.querySelector('.whs');
  b.classList.add('box-res-two');
  console.log(b);
  setTimeout(onreadyDomElems, 1200);
  // you can just use toggle
});

// i can see all created elements
function test_dom() {
  let bx = document.querySelector('.con-center').parentNode;
  console.log(bx)
  // this func for monitoring dom elems -
}
// такие методы приведут к ошибке чтение свойств  - потому что их уже нет
// ты не сможешь снова их добавить - поэтому следует либо просто спрятать 
// либо искать проверки
// здесь мы использовали 2 способа однопременно 
// скрыли блок затем его удалили - потом проверили есть ли такой селектор
// rm selectors / elems dom
document.querySelector('.rm-content').addEventListener('click', function() {
  setTimeout(function() {
    let hd = document.querySelector('.whs');
    if (hd.classList.contains('box-res-two')) {
      document.querySelector('.box-res-two').style.opacity = 0;
      // and rm elem
      setTimeout(function() {
          hd.classList.remove('box-res-two');
      }, 800);
    } else {
      console.warn('selector not found');
      return false;
    }
  }, 700);
});
/*what will he bring out*/
const arrbox1 = [10, 20, 30, 40, 50, 100];
const resArrbox1 = arrbox1.fill(0, 2, 4);

// factorial 
function factorial(n) {
  let res = 1;
  for(let i = 0; i < n; i++) {
    res *= i + 1;
    console.log(res);
  }
  console.log(res);
  return res;
}
// factorial(5);

// emulate seconds
let boxI = 0, resEmulate;
function emulateSeconds() {
  boxI++;
  return boxI;
}
// не более 5 раз
let boost = setInterval(function(){
  resEmulate = emulateSeconds();
  console.log(resEmulate);
  if (resEmulate >= 5) { 
    console.warn('stop - время вышло - точнее итерации');
    clearInterval(boost);
  }
}, 1000);

// recursion
function factorial(n) {
   if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));

// 120
let res = 1;
let storm = res *= 5 + 1;
storm *= 5;
// console.log(storm);

let storm2 = 2;
storm2 = 2 * 2;
storm2 = 4 * 2;
storm2 = 8 * 2;
storm2 = 16 * 2;
storm2 = 32 * 2;
// console.log(storm2);
// factorial 5
let storm3 = 1 * 2 * 3 * 4 * 5;
// console.log(storm3);

let storm4 = 2, num1 = 9, smm;
storm4 *= num1 ;
// console.log(storm4);
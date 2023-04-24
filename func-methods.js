// function test() {
// 	console.log('10001000010100010000111000100001010000010000110001100010010111000011101110000010001001111');
// }

// just example expression function
let func = function (arg1, arg2, arg3) {
	return expression;
};
// ====================================

let context = document.querySelector('.context-here');
// short func
let sun = (a,b) => a + b;
// console.log(sun(1, 2));
// or one arg

function simple() {
	isResizeble = true;
	let n = 6;
	let sun1 = n => n * n;
	document.querySelector('.context-here p').innerHTML = n;
}

context.addEventListener('mouseover', simple, {
    once: true	
});

// brackets should be even if there are no argument
// sun2();

// let animusmal = prompt('ты кто ?: ', 'кот');

// let personWel = (animusmal == 'кот') ?
//   () => console.log('здравствуй кот') :
//   () => console.log('сюда можно только котам');
  // personWel();

// функция по сложнее
let sum = (a, b) => {
  let result = a + b;
  console.log(result);
  return result;
};
// sum(7, 8); 15


// more harder
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
// 	'это правда?',
// 	() => console.log('да'),
// 	() => console.log('нет')
// );

function Person() {
	this.age = 0;

	setTimeout(() => {
      this.age++; // this only object Person
      console.log(this.age);
	}, 1000);
	console.log(this.age);

}
// let p = new Person();

// 'use strict';
let obj1 = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
  	console.log(this.i, this);
  }
};

// obj1.b();
// obj1.c();
b = () => console.log(obj1);

let myCollectionArr = [5,4,3,2,1];
// console.log(myCollectionArr.map(x => x * x))
// or like this 
const nums = [1,2,3,4,5,6,7];
const squares = nums.map(function(nums) {
	return nums * nums;
})
// console.log(squares);
// object maps 
const obj2 = nums.map(function(num){
	return {
		field: num,
	}
})
// console.log(obj2);

let getData = x => {
  console.log('time chooses you: ' + x);
}
// getData('slavik');

setTimeout(() => {
	console.log('ассинхронная функция - время вышло');
}, 1000);

// краткий синтаксис неявно возвращающий результат
let jready = turbo => turbo * turbo; 
// console.log(jready(7));

// блочный синтаксис явно возвращающий результат
let hks = (x, t) => { return x + t;};
// console.log(hks(1,1));

// Amazing func XD - на самом деле она самовызовная 
/* i don`t know how it`s work XD - */
// an LIFE immediately Invoke Function Exspression 
(() => 'foobar')();

// just example 
(function() {
  console.log('you can see - ты увидешь это - так как она вызывается непосредственно');
})();

let timeOutItIsBeggin = unknown => { return unknown; }
// example 2
(() => {
	setTimeout(() => {
    	console.log(timeOutItIsBeggin('начало после одной секунды - привет ассинхронная функция'));
	}, 1200);
})();

// (() => {
// 	const base = 'name is time out Slavik proffesional';
// 	console.log(base);
// })();

function generateEnginePower(unknown) {
	const base = 'kikdown';
	((unknown) => {
		console.log(unknown);
	})(unknown);
}
generateEnginePower('вот суховатый пример все таки');
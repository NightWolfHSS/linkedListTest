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
	console.log(sun1(n));
}

context.addEventListener('mouseover', simple, {
    once: true	
});

// brackets should be even if there are no argument
let sun2 = () => console.log('just test code');
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
// function test() {
// 	console.log('10001000010100010000111000100001010000010000110001100010010111000011101110000010001001111');
// }

// just example regulart function
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

// brackets should be even if there are no arguments

let sun2 = () =>  console.log('just test code');
sun2();


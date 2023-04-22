/* i`m agree with you this code is a house) but it just pructice */
// async methods here = test anync
/* application ajax - XHR */
// fakeapi JSON data
// мне сказали что для того что бы стать проффесионалом мне нужно 10000 строк кода
// это конечно отличная шутка потому что у меня уже over 10 000 000 ) за 7 лет программирования
let requestURL = 'https://jsonplaceholder.typicode.com/users';
/* create new xhr */
const xhr = new XMLHttpRequest();
/* prepare settings */
xhr.open('GET', requestURL);
/* responseType */
xhr.responseType = 'json';
/* onload responce */
xhr.onload = () => {
	let responseHeader = xhr.getResponseHeader('Content-type');
	let content = document.querySelector('.box-res p');
	content.innerHTML = 'Загрузка';
    // render data
	function generate() {
	    let box_res = document.querySelector('.box-res');
	    let elemTp = document.createElement('div');
		let data = xhr.response;
		let custom_data = "";
        // render of arr... in obj ... 
        for(let person of data){
        	custom_data += `
        		<h2> id: ${person.id}  - название: ${person.name}</h2>
        		<h3> имя пользователя: ${person.username}</h3>	
        		<h4> email: ${person.email}</h4>
        		<h5> адрес:</h5>
        		<hr>
        		<p>улица: ${person.address.street}</p>
        		<p>квартал: ${person.address.suite}</p>
        		<p>город: ${person.address.city}</p>
        		<p>зипкод: ${person.address.zipcode}</p>
        		<p>крр: ${person.address.geo.lat}</p>
        		<p>крр: ${person.address.geo.lng}</p>
        	`;
        }

        content.innerHTML = custom_data;
	}
	setTimeout(generate, 1000);

    function hidebtn() {
    	document.querySelector('.push-btn').style.display = 'none';
    }

    hidebtn();
	// можно обрабатывать получить отобразить зарендерить передать сделать функцию

}
/* if error*/
xhr.onerror = () => {
	// также обрабатывать ошибки что то делать
	function setErr() {
		console.error(xhr.response);
	}
	setErr();
}
/* send request */


//  run send request
document.querySelector('.push-btn').addEventListener('click', function(){
    xhr.send();
});

// stop right now the current xhr connection and run the following query


const data = {
	1: {
		name: 'slavik',
		fs: 'sl'
	},
	2: {
		name: 'good',
		fs: 'kik'
	}
}
    
// работает
// Object.keys(data).forEach(key => {
	
// 	let val = data[key];
// 	console.log(`${key}`);

// 	Object.keys(val).forEach(tkey => {
// 		let vol = val[tkey];
// 		console.log(`${ tkey }: ${vol}`);
// 	})

// });


// test obj
// const testObjc = Object.values(superHeroes);
// for(let key7 in testObjc) {
// 	console.log(testObjc[key7]['superPower']['lev']['name']);
// }

// test obj
// for(let k1 in superHeroes) {
// 	console.log(superHeroes[k1]['superPower']['ace']);
// }

// first act 
function getProps(obj) {
  for(let prop in obj) {
  	if (typeof(obj[prop]) === 'object') {
  		// console.log(obj[prop]);
  		for(let prop2 in obj[prop]) {
  			if (typeof(obj[prop][prop2]) === 'object') {
  				console.log(obj[prop][prop2])
  				///
  			}
  		}
  	}
  }
}

// getProps(superHeroes);

// second act 
function getFiniteValue(obj) {
	getProp(obj);
	function getProp(o) {
		for(let prop in o) {
			if (typeof(o[prop]) === 'object') {
				getProp(o[prop]);
			} else {
				console.table(prop + ': ' + o[prop]);
			}
		} 
	}
}
// getFiniteValue(superHeroes);

// recursion test
function reqs(o) {
  testMn(o);
  function testMn(o) {
  	if (o < 4) {
  		console.log(o + ' меньше 4 ');
  	} else {
  		console.log(o + ' больше 4 ');
  	}
  }
}

function justCodeArrInObj() {
  const superHeroes = [
  {
  	name: 'Daniel',
  	age: 20,
  	superPower: {
  		ace: 'true',
  		fire: 'true',
  		levelPower: 22100,
  		lev: {
  			name: 'sadasd'
  		}
  	}
  }, 
  {
  	name: 'Stas',
  	age: 14,
  	superPower: {
  		ace: 'true',
  		fire: 'false',
  		levelPower: 1200,
  		lev: {
  			name: '123123213'
  		}
  	}
  }, 
  {
  	name: 'foxid',
  	age: 12,
  	superPower: {
  		ace: 'true',
  		fire: 'false',
  		levelPower: 200,
  		lev: {
  			name: '2222222'
  		}
  	}
  },
  {
  	name: 'Sii',
  	age: 200, 
  	superPower: {
  		ace: 'false',
  		fire: 'true',
  		levelPower: 1000,
  		lev: {
  			name: 'fugo'
  		}
  	}
  }
];

  let result = superHeroes.map(({ name, age, superPower }) => `\n${name} ${age} ${superPower}`).join('')
  console.log(result);
  return result
}


// const arrBoxObj = {
//   arr1: ['name', 'age', 'level', 12, 1923, 'music'],
//   arr2: ['noweekend', 'work', 'hard'],
//   arrWodker: []
// }
// for(let i = 0; i < arrBoxObj.arr1.length; i++) {
//   console.log(arrBoxObj.arr1[i]);
// }

// // код который выполнится быстрее изза статического значение массива 
// let index, len;
// for(index = 0, len = arrBoxObj.arr1.length; index < len; ++index) {
// 	console.log(arrBoxObj.arr1[index]);
// }


// axe array for-...
let axe = [
  'persone',
  'age',
  'power',
  ['sp', 'xp', 'xp2'],
];
let axe_v2 = {
	person: 'user',
	age: 20,
	power: 2000,
	news: ['sp', 'xp', 'xp2']
};
// console.log(axe[3][0])
// of
// for(let x of axe) {
//   console.log(axe[3]);
// }

// // in
// for(let x in axe) {
// 	console.log(axe[x]);
// }

//  it not worked
// for(let x of axe_v2) {
//   console.log(axe_v2);
// }

// in
// for(let x in axe_v2) {
// 	console.log(axe_v2);
// }

// for arr
// axe.forEach(function(v) {
// 	console.log(v);
// });

// for object keys
// Object.keys(axe_v2).forEach( v2 => {
//   console.log(v2, axe_v2[v2]);
// });

// for object values
// Object.values(axe_v2).forEach( v => {
//   console.log(v);
// });


// function main() {
// 	// second
// 	setTimeout(function() {
// 		console.log('the center of earch');
// 	}, 2000);
// 	// will execute first
// 	console.log('bye');
// }
// main();

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done'), 1000);
});

const myPromise = new Promise(function(){
  // console.log('Выполнение асинхронной операции');
});

const promise2 = new Promise(function(resolve, reject) {
  // console.log('execute operation now ');
  // reject('Переданы некорректные данные');
  // resolve('staff so good');
});


const xs = 1, c = 3;
const promise3 = new Promise(function(resolve, reject) {
	if (xs === 0) {
		// просто это выполнится первым - reject для ошибок
		reject('неверные данные');
	} else {
		const z = c / xs;
		resolve(z);
	}
});

// command run new func into (then) - resolve (r) == true
// v get param in methode mPromise
const mPromise = new Promise(function(r) {
  console.log('execute async code ');
  r('best code exec');
});

// mPromise.then(function(v){
//   console.log(`Data received ${v}`);
// });

// you can just get the result 
const x1 = 2, y1 = 8;
const promiseR34 = new Promise(function() {
  console.log('nissan GT-R power');
  const z1 = x1 * y1;
  setTimeout(function() {
    var time = performance.now();
    console.log(`result: ${z1} - will be done later + ${time}`);
  }, 1200);
});
promiseR34.then();

// just return resolve no use new - right now
const promise4 = Promise.resolve('sonic very faster');
promise4.then( v => console.log(v));

// define a promise through a function
function sum(s, h) {
	return new Promise(function(r) {
		const res = s + h;
		r(res);
	})
}
sum(2, 5).then(function(v){ console.log('result: ', v);});
sum(23, 2).then(function(v){ console.log('result 2:', v);});

// now we will see the catch method
// resolve not execute
const promise5 = new Promise(function(resolve, reject) {
  console.log('test5');
  // resolve('data was returned');
  reject('return - nunknown error');
});
// execute 2second
promise5.catch(function(e) {
  setTimeout(function() {
    console.error(e);
  }, 2100);
});

// function is not found 
const promise6 = new Promise(function(resolve) {
  getDreamWork(); // error not found
  resolve('good job');
});

// catch error 
promise6.catch(function(e){

  const errorObj = {
  	// synchronously all right now
    // 'error': setTimeout(function(){
   	// 	console.error(e);
    // },2000),
    // 'warn': setTimeout(function(){
    // 	console.warn(e);
    // },2000),
    // 'dir': setTimeout(function(){
    // 	console.dir(e);
    // },2000),
    // 'log': setTimeout(function() {
    // 	console.log(e);
    // }),

  	// asynchronously
    start: setTimeout(function() {
      console.error(e);
      setTimeout(function() {
      	console.warn(e);
      	setTimeout(function() {
      	  console.dir(e);
      	  setTimeout(function() {
      	  	console.log(e);
      	  }, 1200);
      	}, 1200);
      }, 1200);
    }, 1200),
  };

  // setTimeout('')
  // console.error(e);
  // console.warn(e);
  // console.dir(e);
  // console.log(e);
});

// throw or reject ==
const promise7 = new Promise(function(resolve, reject){
  const parsed = parseInt('string no a number');
  // if (isNaN(parsed)) {
  // 	throw 'it-s a string, not a number'; // generate error
  // } 
  // the same code
  if (isNaN(parsed)) { 
    reject("Not a number");
  }
  // resolve(parsed);
});

promise7.catch(function(e){
  setTimeout(function(){
    console.error(e);
  },1200);
});

// another function in the promise
function getNubmerTest(str) {
	const parsed = parseInt(str);
	if (isNaN(parsed)) throw 'это не число - not a number';
	else return parsed;
}
const promise8 = new Promise(function(resolve){
  const res = getNubmerTest('string again');
  resolve(res);
});
promise8.catch(function(e){
  setTimeout(function(){
    console.warn(e);
  }, 3800)
  // console.error(e);
});

// try.. catch
const promise9 = new Promise(function(resolve, reject){
  try {
  	getNotAFunc(); // not found func
  	resolve('тут был я - но функция не рабочая');
  }
  catch(e) {
  	reject(`тут произошла ошибка: ${e.message}`);
  }
});
promise9.catch(function(e){
  console.error(e);
});

// one more time
function generateNumber(str) {
	return new Promise(function(resolve, reject){
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject('значение не число');
        else resolve(parsed);
	})
	.then(function(value){ console.log("Результат операции:", value);}, 
        function(error){ console.log("Возникла ошибка:", error);});
}
// generateNumber('12');
// generateNumber('asd');


// chain then then then ...
const helloPromise = new Promise(function(resolve){
  resolve('новый промис 1 - ');
});

const wordPromise = helloPromise.then(function(value){
  // return new value	
  return value + " первый в мире ? 2 - ";
});

const qiPromise = wordPromise.then(function(value){
  // return new value 
  return value + " но не в центре земли 3 -";
});
 
qiPromise.then(function(finalValue){
  // get all data 
  console.log(finalValue);
});

// we can do it this way
//  short code
new Promise(resolve => resolve('good day'))
.then(value => value + ' work best')
.then(value => value + ' you are right')
.then(finalValue => setTimeout(() => console.log(finalValue), 5330));

// error processing
function generateNum(str) {
	return new Promise((resolve, reject) => {
      const parsed = parseInt(str);
      if(isNaN(parsed)) reject('нет это не число '); // if string - error
      else resolve(parsed);
	});
};

function printNum(str) {
	generateNum(str) 
	.then(v => console.warn(v))
	.catch(e => console.error(e));
}
printNum('sttrrr');
printNum('3');


// finally выполнится не смотря не на что
function generateNumber2(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};
function printNumber2(str){
    generateNumber(str)
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("End"));
}
 
printNumber2("3");
printNumber2("triuy");

// objects 
const newBoss = {
  boss: 'Michael',
  age: 23,
};
const sss = Object.keys(newBoss);
console.log(sss);
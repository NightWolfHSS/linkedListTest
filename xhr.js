/*application ajax - XHR*/
let requestURL = 'https://jsonplaceholder.typicode.com/users';
/* create new xhr */
const xhr = new XMLHttpRequest();
/* prepare settings */
xhr.open('GET', requestURL);
/* responseType */
xhr.responseType = 'json';
/* onload responce */
xhr.onload = () => {
	document.querySelector('.box-res p').innerHTML = 'Загрузка';

	function generate() {
		// let data = xhr.response;
		
		// Object.keys(data).forEach(key => {
        //     let val = data[key];
        //     Object.keys(val).forEach(key => {
        //     	let big = val[key];
        //     	console.log(`${key}: ${big}`);
        //     });
		// });



		document.querySelector('.box-res p').innerHTML = 'ты что то сделал';
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


const superHeroes =  {
  1: {
  	name: 'Daniel',
  	age: 20,
  	superPower: {
  		ace: 'true',
  		fire: 'true',
  		levelPower: 22100
  	}
  }, 
  2: {
  	name: 'Stas',
  	age: 14,
  	superPower: {
  		ace: 'true',
  		fire: 'false',
  		levelPower: 1200
  	}
  }, 
  3: {
  	name: 'foxid',
  	age: 12,
  	superPower: {
  		ace: 'true',
  		fire: 'false',
  		levelPower: 200
  	}
  },
  4:  {
  	name: 'Sii',
  	age: 200, 
  	superPower: {
  		ace: 'false',
  		fire: 'true',
  		levelPower: 1000
  	}
  }
}




let bio = Object.keys(superHeroes);

for(let key in superHeroes) {
	// object hidden if key
  console.log(superHeroes[key]);
}

// console.table(Object.values(superHeroes));
var arrbox3 = ['1','c','d','h', '3', '2'];
// console.log(Object.keys(arrbox3));
var arrbox4 = {0: '1', 1: '2', 2: '3', 3: '4'};
// console.log(log_arr_box);
// console.log(Object.values(arrbox3).length);
// console.log(Object.values(arrbox3));






// const arrBoxObj = {
//   arr1: ['name', 'age', 'level', 12, 1923, 'music'],
//   arr2: ['noweekend', 'work', 'hard'],
//   arrWodker: []
// }
// // код меньше = размер массива неизвестен
// for(let i = 0; i < arrBoxObj.arr1.length; i++) {
//   console.log(arrBoxObj.arr1[i]);
// }
// // код который выполнится быстрее изза статического значение массива 
// let index, len;
// for(index = 0, len = arrBoxObj.arr1.length; index < len; ++index) {
// 	console.log(arrBoxObj.arr1[index]);
// }
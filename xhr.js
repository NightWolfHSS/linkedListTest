/*i`m agree with you this code is a house) but it just pructice*/

/*application ajax - XHR*/
// fakeapi JSON data
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

        for(key in data) {

        }

        // let main_data = Object.values(data);
        // console.log(main_data[0]['name']);
        // console.log(main_data[0]['company']);



		// render
		// Object.keys(data).forEach(key => {
        //     let val = data[key];
        //     Object.keys(val).forEach(keyz => {
        //     	let big = val[keyz];
        //     	content.innerHTML = JSON.stringify(big);
        //     	// console.log(val[keyz]);  он берет последнюю
        //     });
		// });

        elemTp.className = 'clever';
        box_res.append(elemTp);
        elemTp.innerHTML = "<p> тип: - "+ xhr.responseType +"</p>" +
        "<p>з аголовок: -  " + responseHeader + "</p>"
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
  		levelPower: 22100,
  		lev: {
  			name: 'sadasd'
  		}
  	}
  }, 
  2: {
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
  3: {
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
  4:  {
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
}

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
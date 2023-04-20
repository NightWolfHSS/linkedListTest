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
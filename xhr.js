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

        let data = {
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
        Object.keys(data).forEach(key => {
        	
    		let val = data[key];
    		console.log(`${key}`);

    		Object.keys(val).forEach(tkey => {
    			let vol = val[tkey];
    			console.log(`${ tkey }: ${vol}`);
    		})

        });
		
        //  тут не много не правильно
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
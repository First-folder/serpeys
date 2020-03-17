<<<<<<< HEAD

var i_rotation = 0, 
arr_foto_back =  ['url("img/foto4.jpg")','url("img/foto5.jpg")','url("img/foto7.jpg")'],
arr_foto_front = ['url("img/foto1.jpg")','url("img/foto2.jpg")','url("img/foto3.jpg")'],
j_foto=0,
i_foto=0;

var j=0;
window.onload = function (){
	// console.log("Hello people");


	events_foto();

	// stop_interval = setInterval(timer_test,300);
} 
function timer_test (){
	j++;
	// console.log("Test function timer"+ j);
	if (j == 10) {
		clearInterval(stop_interval);
	}
}


function events_foto (){
	let  i_time = 0;
	let obj = document.querySelector('.foto');
	obj.addEventListener('mouseenter',rotation_foto);
	obj.addEventListener('mouseleave',stop_rotation_foto);



	function rotation_foto(){
		// let obj_style = getComputedStyle(obj);		

		if (i_time  == 0) {
			i_time = 1;
			j_time = 0;
			i_rotation ++;
			timerID = setTimeout(function(){
					let obj_front = document.querySelector ('.foto_front');
					if(i_foto == 3) i_foto = 0;
						obj_front.style.background =arr_foto_front[i_foto];
						i_foto++;
						// console.log("arr_foto_front[i_foto]"+arr_foto_front[i_foto]);
						// console.log("i_foto"+i_foto);
						// console.log("rtn_foto");
						i_rotation = 0;

			} , 400);
			// console.log('i_rotation'+i_rotation);
		}
		j++;
		// console.log(j);
	
	}	

	function stop_rotation_foto(){
		// console.log("stop_rotation_foto");	
		timerID_norm = setTimeout(function(){
				if (j_time == 0){
				j_time=1;	
				i_time = 0;						
				let obj_back = document.querySelector ('.foto_back');
				if (j_foto == 4) j_foto =0;					
					obj_back.style.background =arr_foto_back[j_foto];
				j_foto++;
				// console.log("остановка  гавань");
		}
		} , 400);


	}

}


=======

var i_rotation = 0, 
arr_foto_back =  ['url("img/foto4.jpg")','url("img/foto5.jpg")','url("img/foto7.jpg")'],
arr_foto_front = ['url("img/foto1.jpg")','url("img/foto2.jpg")','url("img/foto3.jpg")'],
j_foto=0,
i_foto=0;

var j=0;
window.onload = function (){
	// console.log("Hello people");


	events_foto();

	// stop_interval = setInterval(timer_test,300);
} 
function timer_test (){
	j++;
	// console.log("Test function timer"+ j);
	if (j == 10) {
		clearInterval(stop_interval);
	}
}


function events_foto (){
	let  i_time = 0;
	let obj = document.querySelector('.foto');
	obj.addEventListener('mouseenter',rotation_foto);
	obj.addEventListener('mouseleave',stop_rotation_foto);



	function rotation_foto(){
		// let obj_style = getComputedStyle(obj);		

		if (i_time  == 0) {
			i_time = 1;
			j_time = 0;
			i_rotation ++;
			timerID = setTimeout(function(){
					let obj_front = document.querySelector ('.foto_front');
					if(i_foto == 3) i_foto = 0;
						obj_front.style.background =arr_foto_front[i_foto];
						i_foto++;
						// console.log("arr_foto_front[i_foto]"+arr_foto_front[i_foto]);
						// console.log("i_foto"+i_foto);
						// console.log("rtn_foto");
						i_rotation = 0;

			} , 400);
			// console.log('i_rotation'+i_rotation);
		}
		j++;
		// console.log(j);
	
	}	

	function stop_rotation_foto(){
		// console.log("stop_rotation_foto");	
		timerID_norm = setTimeout(function(){
				if (j_time == 0){
				j_time=1;	
				i_time = 0;						
				let obj_back = document.querySelector ('.foto_back');
				if (j_foto == 4) j_foto =0;					
					obj_back.style.background =arr_foto_back[j_foto];
				j_foto++;
				// console.log("остановка  гавань");
		}
		} , 400);


	}

}


>>>>>>> 87cad720dbefedec207093a182dca311d5ef44aa

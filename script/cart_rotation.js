var obj_t  =   document.querySelectorAll('.skills');
	i=0;
	// console.log("ROTATION__"+obj_t.length);
	while (i!=obj_t.length){
		obj_t[i].addEventListener('mousemove',rotate);
		obj_t[i].addEventListener('mouseout',stopRotate);
		i++;
		
	}


 function rotate (e){
	// console.log("++");
 	let cart_item = document.querySelector('.item_card');

 	style_obj = getComputedStyle(cart_item);
 	// cart_item.innerText = e.offsetY +" "+ e.offsetX;

 	let y = (e.offsetY - (Number.parseInt(style_obj.height)/2))/25; 
 	let x = (e.offsetX - (Number.parseInt(style_obj.width)/2))/15;
 	//через переменные css
 	cart_item.style.setProperty('--sizeX', x+'deg');
    cart_item.style.setProperty('--sizeY', -y+'deg');
    //JS
    // cart_item.style.transform = "rotateY("+x+"deg) rotateX("+-y+"deg)";
    
 }  

 function  stopRotate(e){
 	// js
 	let cart_item = this.querySelector('.item_card');
 	// cart_item.style.transform = "rotateX("+0+"deg) rotateY("+0+"deg)";

 	//через переменные css
 	cart_item.style.setProperty('--sizeX', 0+'deg');
    cart_item.style.setProperty('--sizeY', 0+'deg');
 }
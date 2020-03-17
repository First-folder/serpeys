<<<<<<< HEAD

	let sendMail = (rotationContact,rotationMail,status)=>{
		
			return()=>{
			// console.log("sendMailreturn");
			let obj = document.querySelector(".contact"),
			    obj_mail = document.querySelector(".send_mail");
			obj.style.transform = "rotateY("+rotationContact+"deg)";
			obj_mail.style.transform = "rotateY("+rotationMail+"deg)";
			if (status){
				event.preventDefault();
					let info = $("#info").serialize();
					// console.log(info);
			        $.ajax (
				          {
				            url: "send.php",
				            type: "POST",
				         	data: (info),				           
				            datatype:'JSON',
				            beforeSend: funcbefore1,
				            success: funcSuccess1
				          }
			          );
			}
		}

	}
	function funcbefore1 () {
        // $("#loadreg4").html ("<h1 style=color:white > Ожидание данных.... </h1>");
       
      }
      function funcSuccess1 (data) {
      	 data = JSON.parse(data);
      // 	 console.log("sendMail");
	     // console.log("data out server "+data);
	     console.log(data);
    
         }

	let obj = document.querySelectorAll(".contact_item");
	obj[1].addEventListener("click",sendMail(180,360,false));
	obj = document.querySelector(".send_message");
	obj.addEventListener("click",sendMail(0,180,true));
	

=======

	let sendMail = (rotationContact,rotationMail,status)=>{
		
			return()=>{
			// console.log("sendMailreturn");
			let obj = document.querySelector(".contact"),
			    obj_mail = document.querySelector(".send_mail");
			obj.style.transform = "rotateY("+rotationContact+"deg)";
			obj_mail.style.transform = "rotateY("+rotationMail+"deg)";
			if (status){
				event.preventDefault();
					let info = $("#info").serialize();
					// console.log(info);
			        $.ajax (
				          {
				            url: "send.php",
				            type: "POST",
				         	data: (info),				           
				            datatype:'JSON',
				            beforeSend: funcbefore1,
				            success: funcSuccess1
				          }
			          );
			}
		}

	}
	function funcbefore1 () {
        // $("#loadreg4").html ("<h1 style=color:white > Ожидание данных.... </h1>");
       
      }
      function funcSuccess1 (data) {
      	 data = JSON.parse(data);
      // 	 console.log("sendMail");
	     // console.log("data out server "+data);
	     console.log(data);
    
         }

	let obj = document.querySelectorAll(".contact_item");
	obj[1].addEventListener("click",sendMail(180,360,false));
	obj = document.querySelector(".send_message");
	obj.addEventListener("click",sendMail(0,180,true));
	

>>>>>>> 87cad720dbefedec207093a182dca311d5ef44aa

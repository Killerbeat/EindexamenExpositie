$(function(){

	socket.on('project', function (data) {
		console.log(data);
		if(data.hover == true){

			$("#project h1").html(data.title);
			$(".touchpad").css("border","3px solid #FF009A");
			project = true;

			

		}else{

			$(".touchpad").css("border","3px solid #DFDFDF");
			project = false;
			console.log("no hover");
			
		}

	});

});
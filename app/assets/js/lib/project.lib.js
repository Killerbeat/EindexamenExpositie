$(function(){

	socket.on('project_active', function (data) {

		console.log(data.project);
		
		if(data.project.active == true){

			$(".touchpad").css("border","3px solid #FF009A");
			project = true;

			$(".contentText span").attr("data-id", data.project.id).show();
			$(".contentText p").hide();
			
			$("#project h1").html(data.project.title);
			$("#project h3").html(data.project.name);
			$("#project .details").html(data.project.text);

		}else{

			$(".touchpad").css("border","3px solid #DFDFDF");

			$(".contentText span").hide();
			$(".contentText p").show();

			project = false;

		}

	});

});
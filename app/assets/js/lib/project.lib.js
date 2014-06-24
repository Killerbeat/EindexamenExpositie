$(function(){

	socket.on('project_active', function (data) {

		console.log(data);

		if(data.active == true){

			$(".touchpad").css("border","3px solid #FF009A");
			project = true;

			$(".contentText span").attr("data-id", data.id).show();
			$(".contentText p").hide();

			$("#project h1").html(data.title);
			$("#project h3").html(data.name);
			$("#project .details").html(data.description.long);

		}else{

			$(".touchpad").css("border","3px solid #DFDFDF");

			$(".contentText span").hide();
			$(".contentText p").show();

			project = false;

		}

	});

});
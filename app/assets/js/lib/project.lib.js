$(function(){

	socket.on('project_active', function (data) {

		if(data.active == true){

			console.log(data)

			$(".touchpad").css("border","3px solid #FF009A");
			project = true;

			$(".contentText span").attr("data-id", data.id).show();
			$(".contentText p").hide();

			$("#project h1").html(data.name);
			$("#project_team").html("");

			$.each(data.team, function(key, item){
				$("#project_team").append("<h3>"+ item +"</h3>");
			});

			$("#project .details").html(data.description.long);

		}else{

			$(".touchpad").css("border","3px solid #DFDFDF");

			$(".contentText span").hide();
			$(".contentText p").show();

			project = false;

		}

	});

});
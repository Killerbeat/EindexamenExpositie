$(function(){



	$("button.login").click(function(){

		var code = $(".code").val();

		socket.emit('install', {
			device: "controller",
			auth: code
		});

	});

	socket.on('login', function (data) {

  		if(data == true){
  			$("#login").hide();
  			controll = true;
  		}else{
  			$("#login p").addClass("error").html("code werkt niet");

  		}

	});

});
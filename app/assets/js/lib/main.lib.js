var socket 			= io.connect('http://192.168.1.110:1337');
var controll		= false;
var project			= false;

$(function(){

	$(".touchpad").height($("#main").outerHeight() - 180);

	$(".touchpad, .touch").on("touchend", function(){

		if(project == true){

			$("#pane").css({"left": "-100%"});
			controll = false;

		}
		
	});

	$("#project header").on("touchend", function(){

		controll 	= true;
		project 	= false;
		$("#pane").css({"left": "0px"});
		
	});

	socket.on('reset', function (data) {
		location.reload();
  	});

});
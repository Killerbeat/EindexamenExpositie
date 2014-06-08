$(function(){

	$(".slider_left").on("touchend", function(){
		socket.emit('slider', { operation: "back" });
	});

	$(".slider_right").on("touchend", function(){
		socket.emit('slider', { operation: "next" });
	});

});
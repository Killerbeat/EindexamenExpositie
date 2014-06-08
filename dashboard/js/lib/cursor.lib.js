$(function(){

	socket.on('newmove', function (data) {

		var b 	= $(window).outerWidth() / data.screen_w;
		var x 	= data.mouse_x - $(".cursor").outerWidth() / 2;

		var dynamic_size_x 	= Math.round(x * b);

		var c 	= $(window).outerHeight() / data.screen_h;
		var y 	= data.mouse_y - $(".cursor").outerWidth() / 2;

		var dynamic_size_y 	= Math.round(y * c);

		//console.log("x: "+data.mouse_x+"y: "+data.mouse_y+" x: "+dynamic_size_x+"y: "+dynamic_size_y);

		$(".cursor").css({
			top: dynamic_size_y,
			left: dynamic_size_x
		});

		check_overlay(".cursor");

	});
	
});
$(function(){
	
	//Event to place mouse on cursor position
	$(document).mousemove(function(e){

		var x = e.pageX - $(".cursor").outerWidth() / 2;
		var y = e.pageY - $(".cursor").outerWidth() / 2

		$(".cursor").css({
			top: y,
			left: x
		});

		check_overlay(".cursor");

	});

	//Sockets to move mouse
	socket.on('newmove', function (data) {
		var screen_width 	= data.screen_w;
		var screen_heigth 	= data.screen_h;

		var dynamic_size_x = map(data.mouse_x, 0, screen_width, 0,  $(window).outerWidth());
		var dynamic_size_y = map(data.mouse_y, 0, screen_heigth, 0,  $(window).outerHeight());
			//dynamic_size_y = dynamic_size_y - $(".cursor").outerWidth() / 2;
			//dynamic_size_x = dynamic_size_x - $(".cursor").outerWidth() / 2;

		// var b 	= $(window).outerWidth() / data.screen_w;
		// var x 	= data.mouse_x - $(".cursor").outerWidth() / 2;

		// var dynamic_size_x 	= Math.round(x * b);

		// var c 	= $(window).outerHeight() / data.screen_h;
		// var y 	= data.mouse_y - $(".cursor").outerWidth() / 2;

		// var dynamic_size_y 	= Math.round(y * c);

		//console.log("x: "+data.mouse_x+"y: "+data.mouse_y+" x: "+dynamic_size_x+"y: "+dynamic_size_y);

		$(".cursor").css({
			top: dynamic_size_y,
			left: dynamic_size_x
		});

		check_overlay(".cursor");

	});
	
});

function map(value, in_min, in_max, out_min, out_max)
{
	return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
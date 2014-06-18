$(window).on('touchmove', function(e){

	if(controll == true){
		e.preventDefault();
	}

	var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	      
	//console.log('y: '+touch.pageY+' x:'+touch.pageX);

	var top 			= touch.pageY;
	var left			= touch.pageX;

	var touch_width		= $(".touch").outerWidth();
	var touch_height	= $(".touch").outerHeight();

	var broadcast_x		= left - $(".touchpad").offset().left;
	var broadcast_y		= top - $(".touchpad").offset().top;

	var touchpad_width	= $(".touchpad").outerWidth();
	var touchpad_height	= $(".touchpad").outerHeight();

	console.log($(".touchpad").outerWidth(), $(".touchpad").outerHeight());

	//console.log('y: '+broadcast_y+' x:'+broadcast_x);

	if($(".touchpad").offset().left + touch_width / 2 < left && 
		$(".touchpad").offset().left + touchpad_width - touch_width / 2 > left &&
		 $(".touchpad").offset().top + touch_height / 2 < top &&
		  $(".touchpad").offset().top + touchpad_height - touch_height / 2 > top){

			$(".touch").css({
			  	top: 	top - touch_height / 2,
			  	left: 	left - touch_width / 2
			});

			socket.emit('move', {

				position: { 
			  		x: broadcast_x, 
			  		y: broadcast_y
		  		},
		  		phone: {
		  			w: touchpad_width,
		  			h: touchpad_height
		  		}

			});

	}



});
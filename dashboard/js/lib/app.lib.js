$(function(){

	animateDot();

});

function animateDot(){

    var h = $(window).height() - 35;
    var w = $(window).width() - 35;
    
    var new_top = Math.random(0, 200) * 100;
    var new_left = Math.random(0, 164) * 100;

    $('#app_touch').animate({ 
    	top: new_top, 
    	left: new_left 

    }, 2000, function(){
      animateDot();

    });
    
};

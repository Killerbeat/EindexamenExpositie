var socket 			= io.connect('http://192.168.3.18:1337');
var controll		= false;
var project			= false;

$(function(){

	$(".contentText span").hide();

	$(".touchpad").height($("#main").outerHeight() - 180);

	$(".contentText").on("touchend", "span", function(){

		if(project == true){

			displayOnDashboard(parseInt($(".contentText span").attr("data-id")));

			$("#pane").css({"left": "-100%"});
			controll = false;

		}
		
	});

	$("body").on("touchend", ".logout_no", function(){
		$(".logout").hide();
	});

	$("body").on("touchend", ".logout_yes", function(){
		socket.emit('logout', { logout: true});		
	});

	$("#project header").on("touchend", function(){

		controll 	= true;
		project 	= false;
		$("#pane").css({"left": "0px"});

		goBackOnDashboard();
		
	});

	socket.on('reset', function (data) {
		location.reload();
  	});

  	socket.on('logout_ask', function (data) {
  		console.log("ask sihzile");
  		$(".logout").show();
  	});

	/*$(window).on("pagehide", window,function(){
		location.reload();
	});

  	$(window).blur(function(){
  		location.reload();
  	});*/

});

function displayOnDashboard(id){
	socket.emit('project_click', {
		project_click: id
	});
}

function goBackOnDashboard(){
	socket.emit('back', {
		back: true
	});
}
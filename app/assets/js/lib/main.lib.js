var getServer = function() {
	var resolved = null;

	var host = location.host;

	if(host.indexOf('dashboard') > -1 || host.indexOf('ma-expo.nl') > -1) {
		resolved = 'http://server.expo.mmmmmmm.nl';
	}

	if(host.indexOf('localhost') > -1) {
		resolved = 'http://' + (location.host || 'localhost').split(':')[0] + ':1337';
	}


	return resolved;
};

var socket = io.connect(getServer());
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

		setTimeout(function(){

			$("#project h1").html("");
			$("#project_team").html("");
			$("#project_team").append("");
			$("#project .details").html("");

		}, 200)

		goBackOnDashboard();

	});

	socket.on('reset', function (data) {
		location.reload();
  	});

  	socket.on('logout_ask', function (data) {
  		console.log("ask sihzile");
  		$(".logout").show();
  	});

	$(window).on("pagehide", window,function(){
		location.reload();
	});

  	$(window).blur(function(){
  		location.reload();
  	});

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
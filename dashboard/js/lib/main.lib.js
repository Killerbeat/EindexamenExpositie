var socket 			= io.connect('http://172.17.50.224:1337');
var all_projects	= "";

$(function(){
	
	socket.emit('install', {
		device: "dashboard"
	});

	socket.on('connected', function (data) {
		if(data == true){
			$("#landing").remove();
			$("#dashboard, .cursor").show();
		}
	});

	socket.on('code', function (data) {
		console.log(data);
		$("#auth_code, #auth_code_small").html(data);
  	});

	socket.on('reset', function (data) {
		location.reload();
  	});

});
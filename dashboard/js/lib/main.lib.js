var socket 			= io.connect('http://192.168.1.110:1337');

$(function(){

	socket.on('connected', function (data) {
		if(data == true){
			$("#landing").remove();
			$("#dashboard").show();
		}
	});

	socket.on('code', function (data) {
		$("#auth_code, #auth_code_small").html(data);
  	});

	socket.on('reset', function (data) {
		location.reload();
  	});

});
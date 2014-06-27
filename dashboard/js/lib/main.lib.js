var getServer = function() {
	var resolved = null;

	var host = location.host;

	if(host.indexOf('dashboard') > -1 || host.indexOf('ma-expo.nl') > -1) {
		resolved = 'http://server.expo.mmmmmmm.nl';
	} else {
		resolved = 'http://' + (location.host || 'localhost').split(':')[0] + ':1337';
	}

	return resolved;
};

var socket = io.connect(getServer());

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

	socket.on('back', function (data) {

		$("#dashboard").show();
		$(".logout_panel").show();
		$("#project").css("opacity", 0);
		$("#project").addClass("hide").removeClass("active");
  	});

	socket.on('project_click', function (data) {
		console.log(data);

		$(".cursor").attr("data-project",  data.project_click);
		checkClick();
	});


});

var lastProject = null;

function displayInApp(project_id){
	if(lastProject == project_id) return false;

	$.each(all_projects, function(key, item){
		if(project_id == item.id){
			console.log(item);
		    socket.emit('project_active', item);

		}
	});

	lastProject = project_id;

}
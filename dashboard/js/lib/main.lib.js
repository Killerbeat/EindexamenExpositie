var socket 			= io.connect('http://172.17.50.70:1337');
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

function displayInApp(project_id){

	$.each(all_projects, function(key, item){
		if(project_id == item.id){

		    socket.emit('project_active', { 
		        project: {
		            id: project_id,
		            title: item.name,
		            text: item.description,
		            url: item.url,
		            name: item.user.full_name,
		            avatar: item.user.avatar,
		            school_class: item.user.class,
		            active: true
		        } 
		    });

		}
	});

}
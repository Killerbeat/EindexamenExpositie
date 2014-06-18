$(function(){

	$.getJSON('http://ma-jaarboek.nl/api/v1/courses/6', function(projects){
	    all_projects = projects.data.work;
	    
	    $.each(projects.data.work, function(key, item){
	    	console.log(item.screenshot, item.name)

	    	$("#project_container").append('<article class="project" data-id="'+ item.id +'" style="background-image: url('+ item.screenshot +')"><div class="project_header"><h2>'+ item.name +'</h2><div class="project_creator"><img src="'+ item.user.avatar +'"></div></div></article>')

				

	    });

	});


});
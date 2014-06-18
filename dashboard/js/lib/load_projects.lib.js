$(function(){

	$.getJSON('http://ma-jaarboek.nl/api/v1/courses/6', function(projects){
	    all_projects = projects.data.work;

	    $.each(projects.data.work, function(key, item){

	    	var image_thumb = item.screenshot.replace(" ", "%20");
	    	
			console.log(item.id, image_thumb, item.value)

	    	$("#project_container").append("<article class='project' data-id='"+ item.id +"' style='background-image: url("+ image_thumb +");'><div class='project_header'><h2>"+ item.name +"</h2><div class='project_creator'><img src='"+ item.user.avatar +"'></div></div></article>")


	    });

	});


});
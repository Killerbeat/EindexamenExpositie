$(function(){

	var count = 0;

	$.getJSON('http://ma-jaarboek.nl/api/v1/courses/6', mergeProjects);
	$.getJSON('http://ma-jaarboek.nl/api/v1/courses/8', mergeProjects);

	function mergeProjects(projects){
		
		if(count == 1){
			all_projects = projects.data.work.concat(all_projects);
			all_projects = $.shuffle(all_projects);

			createProjectThumbs(all_projects);
		}else{
			all_projects = projects.data.work;
		}

		count++;
	}

	function createProjectThumbs(json_object){
		var count = 0;

		$.each(all_projects, function(key, item){

			if(count == 6){
				return false;
			}

			//count++;

	    	var image_thumb = item.screenshot.replace(" ", "%20");

			console.log(item)

	    	$("#project_container").append("<article class='project' data-id='"+ item.id +"' style='background-image: url("+ image_thumb +");'><div class='project_header'><h2>"+ item.name +"</h2><div class='project_creator'><img src='"+ item.user.avatar +"'></div></div><img src='http://jaarboek2014.hosts.ma-cloud.nl/uploads/"+ item.value +"' style='display:none;'></article>");

	    });
	}





















	/*$.getJSON('http://ma-jaarboek.nl/api/v1/courses/6', function(projects){
	    all_projects = projects.data.work;

	    $.each(projects.data.work, function(key, item){

	    	var image_thumb = item.screenshot.replace(" ", "%20");

			console.log(item.id, image_thumb, item.value)

	    	$("#project_container").append("<article class='project' data-id='"+ item.id +"' style='background-image: url("+ image_thumb +");'><div class='project_header'><h2>"+ item.name +"</h2><div class='project_creator'><img src='"+ item.user.avatar +"'></div></div></article>")


	    });

	});

	$.getJSON('http://ma-jaarboek.nl/api/v1/courses/8', function(projects){
	    all_projects = projects.data.work;

	    $.each(projects.data.work, function(key, item){

	    	var image_thumb = item.screenshot.replace(" ", "%20");
	    	
			console.log(item.id, image_thumb, item.value)

	    	$("#project_container").append("<article class='project' data-id='"+ item.id +"' style='background-image: url("+ image_thumb +");'><div class='project_header'><h2>"+ item.name +"</h2><div class='project_creator'><img src='"+ item.user.avatar +"'></div></div></article>")


	    });

	});*/

});
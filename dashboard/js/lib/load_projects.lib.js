var all_projects = null;

var loadProjects = function(){
	$.getJSON('http://api.expo.mmmmmmm.nl/api.php', function(data) {
		var projects = [];
        all_projects = data;
		$.each(data, function(key, item) {

			projects.push("<article class='project' data-id='"+ item.id +"' style='background-image: url("+ item.media.thumbnail +");'><div class='project_header'><h2>"+ item.name +"</h2></div></article>");		});

		$("#project_container").append(projects);
	});
};

$(function() {
	loadProjects();
});

// $(function(){

// 	var count = 0;

// 	$.getJSON('http://localhost:8100/api.php', mergeProjects);

// 	function mergeProjects(projects){

// 		if(count == 1){
// 			all_projects = projects.data.work.concat(all_projects);
// 			all_projects = $.shuffle(all_projects);

// 			createProjectThumbs(all_projects);
// 		}else{
// 			all_projects = projects.data.work;
// 		}

// 		count++;
// 	}

// 	function createProjectThumbs(json_object){
// 		var count = 0;

// 		$.each(all_projects, function(key, item){

// 			if(count == 6){
// 				return false;
// 			}

// 			//count++;

// 	    	var image_thumb = item.screenshot.replace(" ", "%20");

// 			// console.log(item)

// 	    	$("#project_container").append("<article class='project' data-id='"+ item.id +"' style='background-image: url("+ image_thumb +");'><div class='project_header'><h2>"+ item.name +"</h2><div class='project_creator'><img src='"+ item.user.avatar +"'></div></div><img src='http://jaarboek2014.hosts.ma-cloud.nl/uploads/"+ item.value +"' style='display:none;'></article>");

// 	    });
// 	}








// });
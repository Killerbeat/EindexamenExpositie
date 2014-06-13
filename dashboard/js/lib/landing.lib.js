$(function(){

	var projects_data = "";

	$("#desktop_view").click(function(){
		$("#landing").hide();
		$("#dashboard, .cursor").show();
	});

	$.ajax({
		url: "http://api.dribbble.com/shots/everyone",
		success: function(projects){

			var projects = projects.shots;
				projects_data = projects;

			$.each(projects, function(key, item){
				$("#thumbnail_container").append("<div class='project_container' id='"+ item.id +"'><img src='"+ item.image_teaser_url +"'></div>")
				if(key == 7) return false;
			});
			
		},
		dataType: "jsonp"
	});

	setInterval(function(){
		var random_item = Math.floor((Math.random()* $('#thumbnail_container .project_container').length )+1);
		animateThumbnail(random_item);
	},2000);

	function animateThumbnail(id){
		var item 		= $("#thumbnail_container .project_container:nth-child("+ id +")");
		var random_new 	= Math.floor((Math.random()* Object.keys(projects_data).length )+1);

		item.removeClass("navOutNext navInNext").addClass("navOutNext")

		setTimeout(function(){
			item.html("");
			item.append("<img style='' src='"+ projects_data[random_new].image_teaser_url +"' class='new_item navInNext'>");
		}, 400);

		console.log(random_new)
		

		setTimeout(function(){
			item.addClass("navInNext");
		}, 200);
	}	



});
$(function(){

	$(".cursor").click(function(){

		if($(this).attr("data-project") !== "none" 
			&& $(this).attr("data-project") !== "back" 
			&& $(this).attr("data-project") !== "logout"){

			showProject($(this).attr("data-project"));
			$(this).attr("data-project", "none");
			$(".logout_panel").hide();

			setTimeout(function(){
				$("#dashboard").hide();
			}, 400);

		}

		if($(this).attr("data-project") == "logout"){
			location.reload();
		}

		if($(this).attr("data-project") == "back"){
			$("#dashboard").show();
			$(".logout_panel").show();

			$("#project").removeClass("active");
		}

	});

});

function showProject(project_id){

	console.log("id:", project_id)

	$.each(all_projects, function(key, item){
		if(project_id == item.id){

			$("#project_display p").html(item.description);
			$("#project_display h2").html(item.name);
			$("#project_image img").attr("src", "http://jaarboek2014.hosts.ma-cloud.nl/uploads/"+ item.value);

			$("#project_background").css("background-image", "url(http://jaarboek2014.hosts.ma-cloud.nl/uploads/"+ encodeURIComponent(item.value) +")");
			
			$("#project").addClass("active");

		}
	});
	
}
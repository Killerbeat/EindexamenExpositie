$(function(){

	$(".cursor").click(function(){

		checkClick();

	});

});

function checkClick(){

	if($(".cursor").attr("data-project") !== "none" 
		&& $(".cursor").attr("data-project") !== "back" 
		&& $(".cursor").attr("data-project") !== "logout"){

		createProject($(".cursor").attr("data-project"));
		$(".cursor").attr("data-project", "none");
		$("#project").css("opacity", 1);

		setTimeout(function(){
			$("#dashboard").hide();
			$(".logout_panel").hide();
		}, 400);

	}

	if($(".cursor").attr("data-project") == "logout"){
		location.reload();
	}

	if($(".cursor").attr("data-project") == "back"){
			
		$("#dashboard").show();
		$(".logout_panel").show();
		$("#project").css("opacity", 0);
		$("#project").addClass("hide").removeClass("active");

	}
}

function createProject(project_id){

	console.log("id:", project_id)

	$.each(all_projects, function(key, item){
		if(project_id == item.id){

			$("#project_display p").html(item.description);
			$("#project_display h2").html(item.name);
			$("#project_display h5").html(item.user.full_name);
			$("#project_display span").html(item.user.class);
			$("#project_display aside a").html("");

			if(item.url !== ""){
				$("#project_display aside a").attr("href", item.url).html(item.url);
			}

			$("#project_image img").attr("src", "http://jaarboek2014.hosts.ma-cloud.nl/uploads/"+ item.value);
			$("#project_display aside img").attr("src", item.user.avatar);

			$("#project_background").css("background-image", "url(http://jaarboek2014.hosts.ma-cloud.nl/uploads/"+ encodeURIComponent(item.value) +")");
			
			$("#project").removeClass("hide").addClass("active");

		}
	});
	
}
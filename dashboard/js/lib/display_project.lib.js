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
		console.debug(key, item);
		if(project_id == item.id){
			$("#project_display p").html(item.description.short);
			$("#project_display h2").html(item.name);
			// $("#project_display span").html(item.user.class);
			$("#project_display aside a").html("");

			if(item.url !== ""){
				$("#project_display aside a").attr("href", item.url).html(item.url);
			}

			$('#project_display aside').empty();

			$.each(item.team, function(key, item) {
				$('#project_display aside').append('<h5>' + item + '</h5>');
			});


			$("#project_image img").attr("src", item.media.screenshot);

			$("#project_background").css("background-image", "url(" + item.media.screenshot + ")");

			$("#project").removeClass("hide").addClass("active");

		}
	});

}
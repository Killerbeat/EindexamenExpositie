$(function(){

	$(".cursor").click(function(){

		if($(this).attr("data-project") !== "none" && $(this).attr("data-project") !== "back"){
			showProject($(this).attr("data-project"));
			$(this).attr("data-project", "none");

			setTimeout(function(){
				$("#dashboard").hide();
			}, 400);

		}

		if($(this).attr("data-project") == "back"){
			$("#dashboard").show();
			$("#project").removeClass("active");
		}

	});

});

function showProject(project_id){

	console.log("id:", project_id)

	$.ajax({
		url: "http://api.dribbble.com/shots/"+ project_id,
		success: function(project){

			console.log(project)

			$("#project_display p").html(project.description);
			$("#project_display h2").html(project.title);
			$("#project_image img").attr("src", project.image_url);

			$("#project_background").css("background-image", "url("+ project.image_url +")");
			
			$("#project").addClass("active");
			
		},
		dataType: "jsonp"
	});

	
}
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

	$.each(all_projects, function(key, item){
		if(project_id == item.id){

			$("#project_display p").html(item.description);
			$("#project_display h2").html(item.name);
			$("#project_image img").attr("src", item.screenshot);

			$("#project_background").css("background-image", "url("+ item.screenshot +")");
			
			$("#project").addClass("active");

		}
	});
	
}
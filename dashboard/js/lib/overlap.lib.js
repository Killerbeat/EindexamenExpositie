function check_overlay(pointer) {

    var intersectors = [];

    var tAxis   = $(pointer).offset();
    var t_x     = [tAxis.left, tAxis.left + $(pointer).outerWidth()];
    var t_y     = [tAxis.top, tAxis.top + $(pointer).outerHeight()];
    var count   = 0;
    var item;

    $(".project, .scroll_right, .scroll_left, .scroll_top, .scroll_bottom, .close").each(function() {

        var thisPos     = $(this).offset();
        var i_x         = [thisPos.left, thisPos.left + $(this).outerWidth()]
        var i_y         = [thisPos.top, thisPos.top + $(this).outerHeight()];

        if(t_x[0] < i_x[1] && t_x[1] > i_x[0] && t_y[0] < i_y[1] && t_y[1] > i_y[0]) {

            switch($(this).attr("class")) {

                case "scroll_right":
                    var new_pos = $("#projects").scrollLeft() + 50;

                    $("#projects").stop().animate({
                        scrollLeft: new_pos
                    }, 100);

                    return false;
                break;

                case "scroll_left":
                    var new_pos = $("#projects").scrollLeft() - 50;
                    
                    $("#projects").stop().animate({
                        scrollLeft: new_pos
                    }, 100);

                    return false;
                break;

                case "scroll_top":
                    var new_pos = $("#projects").scrollTop() - 50;
                    
                    $("#projects").stop().animate({
                        scrollTop: new_pos
                    }, 100);
                    return false;
                break;

                case "scroll_bottom":
                    var new_pos = $("#projects").scrollTop() + 50;
                    $("#projects").stop().animate({
                        scrollTop: new_pos
                    }, 100);

                    return false;
                break;

            }

            item    = $(this);
            count++;
        }

    });

    $(".project").css("opacity", "0.8");

    if(count == 1){

        console.log($(item).attr("class"))

        switch($(item).attr("class")) {

            //If a project is hovered do stuff
            case "project":
                $(item).css("opacity", "1")
                $(".cursor").attr("data-project",  $(item).attr("data-id"));

                socket.emit('project', { 
                    project: {
                        id: "",
                        title: "",
                        hover: true
                    } 
                });
            break;

            case "close":
                $(item).addClass("active");
                $(".cursor").attr("data-project",  "back");

            break;

        }



    }else{

        if($('#dashboard').is(':visible')) {
            $(item).css("opacity", "0.8");
        }

        if($('#project').is(':visible')) {
            $("#close_project").removeClass("active");
        }

        $(".cursor").attr("data-project",  "none");

        socket.emit('project', { 
            project: { hover: false } 
        }); 
    }
}
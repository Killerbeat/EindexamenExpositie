function check_overlay(pointer) {

    var intersectors = [];

    var tAxis   = $(pointer).offset();
    var t_x     = [tAxis.left, tAxis.left + $(pointer).outerWidth()];
    var t_y     = [tAxis.top, tAxis.top + $(pointer).outerHeight()];
    var count   = 0;
    var item;

    $(".project, .scroll_top, .scroll_bottom, .close_project, .logout_panel").each(function() {

        var thisPos     = $(this).offset();
        var i_x         = [thisPos.left, thisPos.left + $(this).outerWidth()]
        var i_y         = [thisPos.top, thisPos.top + $(this).outerHeight()];

        if(t_x[0] < i_x[1] && t_x[1] > i_x[0] && t_y[0] < i_y[1] && t_y[1] > i_y[0]) {

            switch($(this).attr("class")) {

                case "scroll_top":
                    var new_pos = $("#projects").scrollTop() - 20;
                    $("#projects").scrollTop(new_pos);

                    return false;
                break;

                case "scroll_bottom":
                    var new_pos = $("#projects").scrollTop() + 20;
                     $("#projects").scrollTop(new_pos)

                    return false;
                break;

            }

            item    = $(this);
            count++;
        }

    });

    $(".project").css("opacity", "0.8");

    if(count == 1){

        switch($(item).attr("class")) {

            //If a project is hovered do stuff
            case "project":
                $(item).css("opacity", "1")
                $(".cursor").attr("data-project",  $(item).attr("data-id"));

                displayInApp(parseInt($(item).attr("data-id")));

            break;

            case "close_project":
                $(item).addClass("active");
                $(".cursor").attr("data-project",  "back");

            break;

            case "logout_panel":
                $(item).addClass("active");
                $(".cursor").attr("data-project",  "logout");

                socket.emit('logout_ask', { logout_ask: true }); 

            break;

        }



    }else{

        if($('#dashboard').is(':visible')) {
            $(item).css("opacity", "0.8");
            $(".logout_panel").removeClass("active");
        }

        if($('#project').is(':visible')) {
            $("#close_project").removeClass("active");
        }

        $(".cursor").attr("data-project",  "none");

        socket.emit('project_active', { 
            project: { active: false } 
        }); 
    }
}
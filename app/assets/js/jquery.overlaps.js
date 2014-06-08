function check_overlay(pointer) {

    var intersectors = [];

    var tAxis   = $(pointer).offset();
    var t_x     = [tAxis.left, tAxis.left + $(pointer).outerWidth()];
    var t_y     = [tAxis.top, tAxis.top + $(pointer).outerHeight()];
    var count   = 0;
    var item;

    $("li").each(function() {

        var thisPos     = $(this).offset();
        var i_x         = [thisPos.left, thisPos.left + $(this).outerWidth()]
        var i_y         = [thisPos.top, thisPos.top + $(this).outerHeight()];

        if(t_x[0] < i_x[1] && t_x[1] > i_x[0] && t_y[0] < i_y[1] && t_y[1] > i_y[0]) {
            $(this)
            item    = $(this);
            count++;
        }

    });

    if(count == 1){
        $(item).css("background-color", "green");

        socket.emit('project', { 
            project: {
                id: 23,
                title: $(item).html(),
                hover: true
            } 
        });

    }else{
        $('li').css("background-color", "red");

        socket.emit('project', { 
            project: { hover: false } 
        });        
    }
}
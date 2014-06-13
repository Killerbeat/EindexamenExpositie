var app = require('http').createServer()
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , url = require('url')

app.listen(1337);

//Main connection object to save screen and mobile
var connection = {};

//connect fast to other device
var connect_to_dashboard = {};
var connect_to_controller = {};

io.sockets.on('connection', function (socket) {
  
  //save client id
  var socket_id   = socket.id;
  
  //Clients install first to get connected
  socket.on('install', function (data) {
    
    //Check device task
    if(data.device == "controller"){

      for(var key in connection) {

        if(data.auth == key && connection[key]["in_use"] == false){
          io.sockets.socket(socket_id).emit("login", true);

          connection[key]["mobile"] = socket_id;
          connection[key]["in_use"] = true;

          connect_to_dashboard[connection[key]["mobile"]]       = connection[key]["dashboard"];
          connect_to_controller[connection[key]["dasbhoard"]]   = connection[key]["mobile"];

          io.sockets.socket(connection[key]["dashboard"]).emit("connected", true);

          console.log(connection);

        }else{
          io.sockets.socket(socket_id).emit("login", false);

        }
       
      }

    }

    //Device is dash
    if(data.device == "dashboard"){

      //Generate code
      var auth  = Math.round(Math.random() * (9999 - 1000) + 1000);

      //Create array
      connection[auth] = {
        "dashboard": socket_id,
        "mobile": "",
        "in_use": false
      };

      console.log("login code: ", auth)

      //Send code to dash
      io.sockets.socket(socket_id).emit("code", auth);

    }

  });

  socket.on('move', function (data) {

    io.sockets.socket(connect_to_dashboard[socket_id]).emit('newmove', {

      mouse_x: data.position.x,
      mouse_y: data.position.y,

      screen_w: data.phone.w,
      screen_h: data.phone.h

    });

  });

  socket.on('project', function (data) {

    io.sockets.socket(connect_to_controller[socket_id]).emit('project', {

      id: data.project.id,
      title: data.project.title,
      hover: data.project.hover

    });

    console.log(data.project.hover)

  });

  socket.on('slider', function (data) {

  	console.log(data.operation);

  });

  socket.on('disconnect', function () {  

    console.log("client disconnect: "+ socket_id);

    for(var key in connection) {

      if(socket_id == connection[key]["dashboard"]){
        
        io.sockets.socket(connect_to_controller[socket_id]).emit('reset', { data: true });
        delete connection[key];
        break;

      }

      console.log(connection[key]["mobile"])

      if(socket_id == connection[key]["mobile"]){

        io.sockets.socket(connect_to_dashboard[socket_id]).emit('reset', { data: true });
        delete connection[key];
        break;

      }

    }

    delete connect_to_dashboard[socket_id];
    delete connect_to_controller[socket_id];

    console.log("client deleted from db");

  });

});
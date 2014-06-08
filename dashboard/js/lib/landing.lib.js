$(function(){

    var BV = new $.BigVideo({ controls: false, doLoop: true });
	BV.init();
	BV.show('video/Timelapse_Ma_Montage.mp4', { 
		ambient: true,
	});

	socket.emit('install', {
		device: "dashboard"
	});

});
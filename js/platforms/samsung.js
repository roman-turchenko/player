
/**
 * Created by roman on 31.05.2015.
 */
var player = {

    instance: document.createElement("object"),
    playState: "stopped",
    settings: {
        width: "100%",
        height: "inherit",
        autoplay: true
    },

    get: function(){

        var that = this;
        this.instance.id = "av-player";
        this.instance.type = "application/avplayer";

        //register video related keys
        //tizen.tvinputdevice.registerKey("MediaPlayPause");
        //tizen.tvinputdevice.registerKey("MediaPlay");
        //tizen.tvinputdevice.registerKey("MediaPause");
        //tizen.tvinputdevice.registerKey("MediaStop");
        //tizen.tvinputdevice.registerKey("MediaFastForward");
        //tizen.tvinputdevice.registerKey("MediaRewind");

        return this.instance;
    },

    setSrc: function( src ){

        //this.instance.src = src;
        var that = this;

        var listener = {
            onbufferingstart : function() {
                that.playState = "buffering";
            },
            onbufferingprogress : function(percent) {
                that.playState = "buffering";
            },
            onbufferingcomplete : function() {
                that.playState = "playing";
            },
            oncurrentplaytime : function(currentTime) {
                that.playState = "playing";
            },
            onevent : function(eventType, eventData) {
                console.log("event type : " + eventType + ", data: " + eventData);
            },
            onerror : function(eventType) {
                that.playState = "error";
            },
            onsubtitlechange : function(duration, text, data3, data4) {
                console.log("Subtitle Changed.");
            },
            ondrmevent : function(drmEvent, drmData) {
                console.log("DRM callback: " + drmEvent + ", data: " + drmData);
            },
            onstreamcompleted : function() {
                console.log("Stream Completed");
                //You should write stop code in onstreamcompleted.
                //webapis.avplay.pause();
                //webapis.avplay.seekTo(0);
            }
        };

        webapis.avplay.setListener(listener);
		

		document.addEventListener("visibilitychange", function() {
			if(document.hidden){
				// Something you want to do when hide or exit.
		        webapis.avplay.suspend(); //If you use avplay, it is mandatory
			} else {
				// Something you want to do when resume.
		        webapis.avplay.restore(); //If video is played when hided time, video is played from last played url and time.
		        //If video was not played, nothing happens.
			}
		});
			

        webapis.avplay.prepareAsync(function(){
            //set default position and size
            //setDisplayRect should be done to display video. without it, video is not shown.
            var avPlayerObj = document.getElementById("av-player");
            webapis.avplay.setDisplayRect(0, 0, that.settings.width, that.settings.height);

            console.log("Current state: " + webapis.avplay.getState());
            console.log("prepareAsync Success");

        }, function(e){
            console.log("Current state: " + webapis.avplay.getState());
            console.log("prepareAsync Fail");
            console.log(e);
        });
    },

    stop: function(){
        webapis.avplay.stop();
        console.log("Current state: " + webapis.avplay.getState());
    },

    play: function(){
        webapis.avplay.play();
        console.log("Current state: " + webapis.avplay.getState());
    },

    pause: function(){
        webapis.avplay.pause();
        console.log("Current state: " + webapis.avplay.getState());
    },

    rewind: function(){

    },

    fast_forward: function(){

    }
};

var controls = function(event, app){

    switch(event.keyCode ){

        //case tizen.tvinputdevice.getKey("MediaPlayPause").code:
		case "ok":
        case 13: // ok btn
            app.togglePlaying(app.html.btn_control_center);
            break;

        //case tizen.tvinputdevice.getKey("MediaPlay").code:
        case 415: // play
            console.log("Play button clicked");
            app.play();
            break;

        //case tizen.tvinputdevice.getKey("MediaPause").code:
        case 19: // pause
            console.log("Pause button clicked");
            app.pause();
            break;
/*
        case 35: // stop
            app.stop();
            break;*/
    }
};

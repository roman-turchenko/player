/**
 * Created by roman on 31.05.2015.
 */
var player = {

    instance: document.createElement("object"),
    playState: "stopped",
    settings: {
        width: 1280,
        height: 720,
        autoplay: true
    },

    get: function(){

        var that = this;

        this.instance.width = this.settings.width;
        this.instance.height = this.settings.height;

        if( this.settings.autoplay )
            this.instance.autoStart = true;

        this.instance.type = "video/x-ms-wmv";
        this.instance.id = "player";
        this.instance.onPlayStateChange = function(e){
            switch (that.instance.playState){
                case 0: that.playState = "stopped";  break;
                case 1: that.playState = "playing"; break;
                case 2: that.playState = "paused"; break;
                case 3: that.playState = "connecting"; break;
                case 4: that.playState = "buffering"; break;
                case 5: that.playState = "finished"; break;
                case 6: that.playState = "error"; break;
            }
        };

        return this.instance;
    },

    setSrc: function(src){
        this.instance.data = src;
    },

    stop: function(){
        this.instance.stop();
    },

    play: function(){
        this.instance.play(1);
    },

    pause: function(){
        this.instance.play(0)
    },

    rewind: function(){

    },

    fast_forward: function(){

    }
};

var controls = function(event, app){

    switch(event.keyCode ){

        case 13: // ok btn
            app.togglePlaying(app.html.btn_control_center);
            break;

        case 461: //back
            NetCastBack();
            break;

        case 415: // play
            app.play();
            break;

        case 19: // pause
            app.pause();
            break;
/*
        case 413: // stop
            app.stop();
            break;*/
    }
};

/**
 * Created by roman on 31.05.2015.
 */
var player = {

    instance: document.createElement("video"),
    playState: "stopped",
    settings: {
        width: "100%",
        height: "inherit",
        autoplay: true
    },

    get: function(){

        var that = this;

        this.instance.style.width = this.settings.width;
        this.instance.style.height = this.settings.height;
        //this.instance.controls = "controls";
        if( this.settings.autoplay )
            this.instance.autoplay = true;

        this.instance.addEventListener("abort", function(e){ that.playState = "stopped"; });
        this.instance.addEventListener("ended", function(e){ that.playState = "finished"; });
        this.instance.addEventListener("playing", function(e){ that.playState = "playing"; });
        this.instance.addEventListener("pause", function(e){ that.playState = "paused"; });
        this.instance.addEventListener("loadstart", function(e){ that.playState = "connecting"; });
        this.instance.addEventListener("waiting", function(e){ that.playState = "buffering"; });
        this.instance.addEventListener("error", function(e){ that.playState = "error"; });

        return this.instance;
    },

    setSrc: function( src ){

        this.instance.src = src;
    },

    stop: function(){
        this.pause();
        this.instance.currentTime = 0;
    },

    play: function(){
        this.instance.play();
    },

    pause: function(){
        this.instance.pause();
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

        case 415: // play
            app.play();
            break;

        case 19: // pause
            app.pause();
            break;
/*
        case 35: // stop
            app.stop();
            break;*/
    }
};

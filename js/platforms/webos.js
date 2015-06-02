/**
 * Created by roman on 31.05.2015.
 */
var player = {

    instance: document.createElement("video"),
    playState: "stopped",
    settings: {
        width: "100%",
        height: "inherit"
    },

    get: function(){

        var that = this;

        this.instance.style.width = this.settings.width;
        this.instance.style.height = this.settings.height;
        //this.instance.controls = "controls";

        this.instance.onabort = function(e){
            that.playState = "stopped";
        };

        this.instance.onended = function(e){
            that.playState = "finished";
        };

        this.instance.onplaying = function(e){
            that.playState = "playing";
        };

        this.instance.onpause = function(e){
            that.playState = "paused";
        };

        this.instance.onloadstart = function(e){
            that.playState = "connecting";
        };

        this.instance.onwaiting = function(e){
            that.playState = "buffering";
        };

        this.instance.onerror = function(e){
            that.playState = "error";
        };

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

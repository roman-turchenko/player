/**
 * Created by roman on 31.05.2015.
 */
var player = {

    instance: document.createElement("object"),
    playState: "stopped",
    settings: {
        width: "1280px",
        height: "720px"
    },

    get: function(){

        var that = this;

        this.instance.style.width = this.settings.width;
        this.instance.style.height = this.settings.height;

        this.instance.type = "video/x-ms-wmv";
        this.instance.id = "player";
        this.instance.onPlayStateChange = function(e){
            switch (e.playState){
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

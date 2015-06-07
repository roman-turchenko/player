/**
 * Created by roman on 07.06.2015.
 */
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

        this.instance.id = "mediaobject";
        this.instance.style.width = this.settings.width;
        this.instance.style.height = this.settings.height;

        if( this.settings.autoplay )
            this.instance.autoplay = true;

        this.instance.onPlayStateChange = function(e){

            switch (that.instance.playState)
            {
                case 5: that.playState = "finished"; break;
                case 0: that.playState = "stopped"; break;
                case 6: that.playState = "error"; break;
                case 1: that.playState = "playing"; break;
                case 2: that.playState = "paused"; break;
                case 3: that.playState = "connecting"; break;
                case 4: that.playState = "buffering"; break;
            }
        };

        return this.instance;
    },

    setSrc: function( src ){

        this.instance.src = src;
    },

    stop: function(){
        this.stop();
    },

    play: function(){
        this.instance.play();
    },

    pause: function(){
        this.instance.play(0);
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

        case VK_PLAY: // play
            app.play();
            break;

        case VK_PAUSE: // pause
            app.pause();
            break;

        case VK_STOP: // stop
            app.stop();
            break;
    }
};

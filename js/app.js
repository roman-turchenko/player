/**
 * Created by roman on 31.05.2015.
 */
var App = function( player, html ){


    this.html = html, this.player = player; var a = this;

    this.settings = {
        fadeout: 4
    };

    this.fadeoutTimer = 0;
    this.interval = setInterval(function(){

        if( a.player.playState == "playing" ) {
            if( ++a.fadeoutTimer >= a.settings.fadeout )
                a.hideAll();
        }else{
            a.fadeoutTimer = 0;
        }

    }, 1000);

    this.init = function(){

        console.log("Initialization...");

        // create html
        this.html.create();

        // add to the document
        this.document.body.appendChild(this.html.container);

        // add src video
        this.player.setSrc(this.src);

        // add handler to controll btns
        this.html.btn_control_center.onclick =
            this.html.btn_player_play_pause.onclick = function(e){
                a.togglePlaying(e.target);
                e.stopPropagation();
        };

        // add player
        this.html.container_player.appendChild(this.player.get());

        this.html.container_player.onclick = function(e){
            a.fadeoutTimer = 0;
            a.showAll();
            a.togglePlaying(a.html.btn_control_center);
        };

        document.onkeydown = function(e){
            a.fadeoutTimer = 0;
            a.showAll();
            a.togglePlaying(a.html.btn_control_center);
        };
    };

    window.onload = this.init;
    // disable selection
    window.onselectstart = function(e){ return false; };
};

App.prototype = {

    play: function(){
        this.html.btn_control_center.classList.remove("play");
        this.html.btn_control_center.classList.add("pause");
        this.html.btn_player_play_pause.classList.remove("play");
        this.html.btn_player_play_pause.classList.add("pause");
        this.player.play();
    },

    pause: function(){
        this.html.btn_control_center.classList.remove("pause");
        this.html.btn_control_center.classList.add("play");
        this.html.btn_player_play_pause.classList.remove("pause");
        this.html.btn_player_play_pause.classList.add("play");
        this.player.pause();
    },

    hideAll: function(){

        this.html.bar_bot_menu.style.visibility =
            this.html.bar_controls.style.visibility =
                this.html.btn_control_center.style.visibility = "hidden";
    },

    showAll: function(){

        this.html.bar_bot_menu.style.visibility =
            this.html.bar_controls.style.visibility =
                this.html.btn_control_center.style.visibility = "visible";
    },

    togglePlaying: function(elem){

        if( elem.classList.contains("pause"))
            this.pause();
        else
            this.play();
    }
};

//var src = "http://tvhope.cdnvideo.ru/tvhope-pull/tvhope_1/playlist.m3u8";
var src = "http://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv";
var app = new App(player, html, src);
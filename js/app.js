/**
 * Created by roman on 31.05.2015.
 */
var App = function( player, html, src, controls ){


    this.html = html,
    this.player = player,
    this.src = src,
    this.controls = controls;

    var a = this;

    this.settings = {
        fadeout: 4
    };

    this.fadeoutTimer = 0;

    // Hide central button after "fadeout" seconds
    this.interval = setInterval(function(){

        if( a.player.playState == "buffering" ){
            a.html.buffering.classList.remove("hidden");
        }else{
            a.html.buffering.classList.add("hidden");
        }

        if( ++a.fadeoutTimer >= a.settings.fadeout && !a.html.btn_control_center.classList.contains("play") || !a.html.buffering.classList.contains("hidden") )
            a.hideAll();
    }, 500);

    this.init = function(){

        console.log("Initialization...");

        // create html
        this.html.create();

        // add html to the document
        this.document.body.appendChild(this.html.container);

        // add src video
        this.player.setSrc(this.src);

        // add player
        this.html.container_player.appendChild(this.player.get());

        this.html.btn_control_center.onclick =
        this.html.container_player.onclick = function(e){
            a.togglePlaying(a.html.btn_control_center);
        };

        // apply controls depends on platform
        document.onkeydown = function(e){
            a.controls( e, a );
        };

        a.hideAll();
    };

    window.onload = this.init;
    // disable selection
    window.onselectstart = function(e){ return false; };
};

App.prototype = {

    play: function(){

        if( this.html.btn_control_center.classList.contains("play") ){

            this.html.btn_control_center.classList.remove("play");
            this.html.btn_control_center.classList.add("pause");

            this.html.buffering.classList.add("hidden");

            this.fadeoutTimer = 0;
            this.showAll();

            this.player.play();
        }
    },

    pause: function(){

        if( this.html.btn_control_center.classList.contains("pause") ) {

            this.html.btn_control_center.classList.remove("pause");
            this.html.btn_control_center.classList.add("play");

            this.html.buffering.classList.add("hidden");

            this.fadeoutTimer = 0;
            this.showAll();

            this.player.pause();
        }
    },

    hideAll: function(){
        this.html.btn_control_center.classList.add("hidden");
    },

    showAll: function(){
        this.html.btn_control_center.classList.remove("hidden");
    },

    togglePlaying: function(elem){

        if( elem.classList.contains("pause"))
            this.pause();
        else
            this.play();
    }
};
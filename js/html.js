/**
 * Created by roman on 31.05.2015.
 */
var html = {

    container: { tag: "div" },
    container_player: { tag: "div", childOf: "container" },
    btn_control_center: { tag: "div", childOf: "container", className: "play" },

    bar_controls: { tag: "div", childOf: "container_player" },
    container_btn_player: { tag: "ul", childOf: "bar_controls"},
    btn_player_separator1: { tag: "li", childOf: "container_btn_player", className: "separator" },
    btn_player_play_pause: { tag: "li", childOf: "container_btn_player", className: "play" },
    btn_player_separator2: { tag: "li", childOf: "container_btn_player", className: "separator" },

    bar_bot_menu: { tag: "div", childOf: "container" },
    bar_progress: { tag: "div", childOf: "bar_controls" },
    create: function(){
        for( var key in this ){
            if( typeof this[key] !== 'function' ){

                var el = document.createElement(this[key].tag);
                    el.id = key;

                for( var prop in this[key] ){
                    if( prop === "childOf" && typeof this[this[key][prop]].appendChild === 'function' ){
                        this[this[key][prop]].appendChild( el );
                    }else if( prop !== "tag" ){
                        el[prop] = this[key][prop];
                    }
                }
                this[key] = el;
            }
        }
    }
}

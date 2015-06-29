//
// Copyright (C) 2010 Panasonic Corporation. All Rights Reserved.
//
appli_symbol = "helloworld";

var sobj = stage ({
    "symbol": appli_symbol + "_main",

    "key_hook": function (up_down, key) {

        if (up_down != KEY_PRESS)
            return false;

        switch (key) {
            case TXK_RETURN:
                exit_appli(0);
                return true;

            case TXK_ENTER:
            case TXK_PLAY:
                // player play

                break;

            case TXK_PAUSE:
                // player pause

                break;


        }
        return true;
    },

    "in": [
        {
            "from": ["default"],
            "hook": function(obj){
                complete_on_stage(obj);
            }
        },
    ],
    "out": [{
        "to":["default"],
        "hook": function(obj){
            complete_off_stage(obj);
        }
    }],
    "bg_image": [
        new gbox ({
            "width": 1920,
            "height": 1080,
            "color": [255, 255, 255, 255],
            "translate": [0 ,0 ,0]
        })
    ],
    "components": [
        new gtextbox ({
            "translate": [0, 0, 0],
            "width": 1600,
            "height": 400,
            "text": "Hello World!",
            "font_size": 200,
            "color": [255, 10, 10, 255],
            "align": CENTER
        }),

        new HLSPLayer ({

            "event_hook": function(player, event, streamIndex){

            }

        })
    ]
});

ready_appli();
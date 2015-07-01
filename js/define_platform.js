/**
 * Created by roman on 31.05.2015.
 */
if( navigator.userAgent.indexOf("Web0S") !== -1 ){
    platform = "webos";
}else if( navigator.userAgent.indexOf("NetCast") !== -1 ){
    platform = "netcast";
}else if( /.+nettv\/\d+\.\d+\.\d+.+/i.test(navigator.userAgent) ){
    platform = "philips";
}else if( platform == "browser" )
    platform = "webos";

if( typeof document.write == "function" )
    document.write('<script src="./js/platforms/'+platform+'.js"></script>');
else{
    var script = document.createElement("script");
        script.src = './js/platforms/'+platform+'.js';

    document.head.appendChild(script);
}


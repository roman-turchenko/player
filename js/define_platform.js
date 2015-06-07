/**
 * Created by roman on 31.05.2015.
 */
var platform = "browser";

if( navigator.userAgent.indexOf("Web0S") !== -1 || platform == "browser" ){
    platform = "webos";
}else if( navigator.userAgent.indexOf("NetCast") !== -1 ){
    platform = "netcast";
}else if( navigator.userAgent.indexOf("PHILIPS_OLS") !== -1 ){
    platform = "philips";
}

document.write('<script src="./js/platforms/'+platform+'.js"></script>');

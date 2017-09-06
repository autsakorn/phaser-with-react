import $ from "jquery";
var jPost = function(url, data){
    return new Promise(function(resolve, reject){
        var settings = {
            "async": false,
            "crossDomain": true,
            "url": url,
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                // "content-type": "application/x-www-form-urlencoded",
                // "cache-control": "no-cache",
            },
            "data": data
        }
        $.ajax(settings).done(function (response) {
            resolve(response);
        });
    });
}
export default jPost;

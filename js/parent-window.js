// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
    console.log('parent received message!:  ',e.data);
    if(e.data.hasOwnProperty("subject")){
        if(e.data.subject == "urlUpdate"){
            var paramsString = e.data.body.params;
            var appparams = new URLSearchParams(paramsString);
            var windowparams = new URLSearchParams(window.location.search);
            if(e.data.body.action == "set"){
                var postId = appparams.get('postId');
                var title = appparams.get('title');
                windowparams.set('postId', postId);
                windowparams.set('title', title);
                var pageUrl = '?' + windowparams.toString();
                window.history.pushState('', '', pageUrl);
            } else if(e.data.body.action == "delete"){
                window.history.pushState('', '', "?");
            }
        }
    }
},false);
var appFrame = document.getElementById("appframe");
window.onpopstate = function(e){
    console.log("POP STATE!");
    var url = new URL(window.location);
    var params = new URLSearchParams(url.search);
    appFrame.contentWindow.postMessage(params.toString(), "*");
};
function init() {
    console.log("nonReactInit");
    window.onload = function() {
        console.log("index1: window.onload handler");
    };
}

init();

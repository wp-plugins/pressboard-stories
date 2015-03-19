(function (global) {
    var d = document,
        s = d.createElement("script"),
        d = d.getElementsByTagName("script")[0];
    s.type = 'text/javascript';
    s.async = !0;
    s.src = "http://adserver.pressboard.ca/v1/embedder?media=" + global.PressboardMedia.mediaId;
    d.parentNode.insertBefore(s, d);
})(this);
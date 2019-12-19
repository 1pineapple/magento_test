define([
    "jquery"
], function($){
    "use strict";
    return function () {
        let dots = $("#dots");
        let moreText = $("#more");
        let btnText = $("#myBtn");
        btnText.on('click',function () {
            if (dots.css("display") === "none") {
                dots.css("display","inline")  ;
                btnText.text("Read more");
                moreText.css("display","none");
            } else {
                dots.css("display","none")  ;
                btnText.text("Read less");
                moreText.css("display","inline");
            }
        });
    }
});
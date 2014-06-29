/* jshint browser:true */
/* global $:false, jQuery:false */

$(function () {
    $.each(document.images, function () {
        var image = this;
        var src = $(image).attr('src') || '';
        if (src.length === 0) {
            var afterSrc = $(image).attr('after-src') || '';
            if (afterSrc.length > 0) {
                var img = new Image();
                img.src = afterSrc;
                $(img).load(function () {
                    image.src = this.src;
                });
            }
        }
    });
});
/* jshint browser:true */
/* global $:false, jQuery:false */

/*
 * Use the "after-src" attribute instead of "src" for the image tags. Thus, the images
 * will be downloaded only after the page is loaded. If's recommended to enter the
 * dimension as well.
 */

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
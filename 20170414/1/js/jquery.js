/**
 * Created by chy on 2017/4/14 0014.
 */
$(document).ready(function () {
    $(".ui-box").click(function (e) {
        var src = e.target.src;
        if (src || !$(".none").length) {
            $(".ui-box-fade").attr("src", src)
            $(".ui-box-fade").toggleClass("none");
        }
    })
})

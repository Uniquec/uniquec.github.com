/**
 * Created by chy on 2017/4/14 0014.
 */
$(document).ready(function () {
    $(".ui-box-button").click(function () {
        $(".ui-box-button").removeClass("bgc");
        $(this).addClass("bgc");
        $(".ui-box-square-box").addClass("none");
        $(".ui-box-square-box").removeAttr("style");
        $(".ui-box-square-box").eq($(this).index()).slideDown();
    })
});
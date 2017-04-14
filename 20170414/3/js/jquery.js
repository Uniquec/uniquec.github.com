/**
 * Created by chy on 2017/4/14 0014.
 */
$(document).ready(function () {
    $(".ui-box-line-button").click(function (e) {
        $(this).parent().remove();
        var num = $(".ui-box-line").length;
        for (var i = 1;i <= num;i++)
            $(".ui-box-line-num").eq(i-1).html(i);
    });
    $(".ui-box-add").click(function () {
        var num = $(".ui-box-line").length + 1;
        var newdiv = "<div class='ui-box-line'><div class='ui-box-line-num'>"+num+"</div><input type='text' class='ui-box-line-content'><div class='ui-box-line-button'>Delete</div></div>"
        if(num > 11){
            alert("最多添加11个");
        }
        else {
            $(".ui-box:last").append(newdiv);
            $(".ui-box-line-button").click(function (e) {
                $(this).parent().remove();
                var num = $(".ui-box-line").length;
                for (var i = 1;i <= num;i++)
                    $(".ui-box-line-num").eq(i-1).html(i);
            });
        }
    });
});
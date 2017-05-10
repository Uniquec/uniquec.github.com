/**
 * Created by chy on 2017/5/5 0005.
 */
var end = document.getElementById("end"),
    click = document.getElementById("click");
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.015126, 30.286993);
map.centerAndZoom(point, 16);

map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州");

click.onclick = function () {
    var transit = new BMap.TransitRoute(map, {
        renderOptions: {
            map: map,
            panel: "results"
        }
    });
    transit.search("杭州师范大学（杭州市海曙路58号）", end.value);
}
map.enableScrollWheelZoom(true);



/**
 * Created by chy on 2017/5/5 0005.
 */
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.141731, 30.258472);
var hotel = document.getElementById("hotel");
map.centerAndZoom(point, 13);

map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州");
map.enableScrollWheelZoom(true);

hotel.onclick = function () {
    var local = new BMap.LocalSearch(map, {
        renderOptions: {
            map: map,
            panel: "results",
            autoViewport: true
        }
    });
    local.searchNearby("宾馆", "西湖");
}


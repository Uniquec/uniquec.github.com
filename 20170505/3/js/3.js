/**
 * Created by chy on 2017/5/5 0005.
 */
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.018244,30.296403);
map.centerAndZoom(point, 18);

map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州");

map.enableScrollWheelZoom(true);

// map.addEventListener("click", function (e) {
//     alert("鼠标(x,y):  (" + e.point.lng + ", " + e.point.lat + ") 缩放等级:" + this.getZoom());
// });

var sContent1 = "<img src='../image/1.jpg' style='float: right' width='160' height='100'>" + "</br>";
var sContent2 = "<img src='../image/2.jpg' style='float: right' width='160' height='100'>" + "</br>";
var sContent3 = "<img src='../image/3.jpg' style='float: right' width='160' height='100'>" + "</br>";
var sContent4 = "<img src='../image/4.jpg' style='float: right' width='160' height='100'>" + "</br>";

// var btn = document.getElementById("btn");
var btn = "<button id='btn'>查看详情</button>";


var data_info = [[120.019385, 30.295257,sContent1,"杭师大恕园7号楼",btn],
    [120.020027, 30.296422,sContent2,"杭师大恕园11号楼",btn],
    [120.020732, 30.295752,sContent3,"杭师大恕园2号楼",btn],
    [120.017256, 30.297685,sContent4,"杭师大图书馆",btn]
];
var opts = {
    width : 300,     // 信息窗口宽度
    height: 120,     // 信息窗口高度
    enableMessage:true//设置允许信息窗发送短息
};
for(var i=0;i<data_info.length;i++){
    var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1],data_info[i][2],data_info[i][3]));  // 创建标注
    var content = data_info[i][2] + data_info[i][3] + data_info[i][4];
    map.addOverlay(marker);               // 将标注添加到地图中
    addClickHandler(content,marker);
}
function addClickHandler(content,marker){
    marker.addEventListener("click",function(e){
        openInfo(content,e)}
    );
}
function openInfo(content,e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口
}


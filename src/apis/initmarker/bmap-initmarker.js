export function baiduInitMarker(map, obj) {
    var point = new BMap.Point(obj.lng, obj.lat)
    var marker = new BMap.Marker(point)
    map.addOverlay(marker)
    return marker
}
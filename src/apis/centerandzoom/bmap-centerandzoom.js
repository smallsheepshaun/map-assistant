export function baiduCenterAndZoom(map, lng, lat, zoom) {
    zoom = zoom || 15
    let point = new BMap.Point(lng, lat)
    map.centerAndZoom(point, zoom)
}
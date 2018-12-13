export function baiduInitMap(obj) {
    let map = new BMap.Map(obj.mapId)
    let point = new BMap.Point(obj.lng, obj.lat)
    map.centerAndZoom(point, obj.zoom)
    map.enableScrollWheelZoom(true)
    return map
}
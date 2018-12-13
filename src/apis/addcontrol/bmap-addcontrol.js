export function baiduAddControl(map, obj) {
    obj.zoomControl ? map.addControl(new BMap.NavigationControl()) : ''
    obj.mapTypeControl ? map.addControl(new BMap.MapTypeControl()) : ''
    obj.streetViewControl ? map.addControl(new BMap.PanoramaControl()) : ''
}
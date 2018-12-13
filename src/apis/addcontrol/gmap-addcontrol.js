export function googleAddControl(map, obj) {
    map.zoomControl = obj.zoomControl ? obj.zoomControl : false
    map.mapTypeControl = obj.mapTypeControl ? obj.zoomControl : false
    map.streetViewControl = obj.streetViewControl ? obj.zoomControl : false
}
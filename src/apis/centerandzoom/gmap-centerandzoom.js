export function googleCenterAndZoom(map, lng, lat, zoom) {
    zoom = zoom || 15
    let point = new google.maps.LatLng(lat, lng)
    map.setCenter(point)
    map.setZoom(zoom)
}
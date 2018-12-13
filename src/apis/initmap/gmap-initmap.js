export function googleInitMap(obj) {
    let center = { lat: obj.lat, lng: obj.lng, }
    let map = new google.maps.Map(document.getElementById(obj.mapId), {
        center: center,
        zoom: obj.zoom,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    })
    return map
}
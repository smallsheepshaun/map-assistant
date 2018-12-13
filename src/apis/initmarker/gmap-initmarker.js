export function googleInitMarker(map, obj) {
    var uluru = {lat: obj.lat, lng: obj.lng}
    return new google.maps.Marker({position: uluru, map: map})
}
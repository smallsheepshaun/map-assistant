export function googleGetViewport(map, pointArr) {
    var markers = []
    for(var i = 0;i<pointArr.length;i++){
        var marker = new google.maps.Marker({
            position : pointArr[i],
            map : map,
        });
        markers.push(marker)
        marker.setMap(null)
    } 

    var bounds = new google.maps.LatLngBounds()
    for(var i = 0;i < markers.length;i++){
        bounds.extend(markers[i].getPosition());
    }
    map.fitBounds(bounds)
}
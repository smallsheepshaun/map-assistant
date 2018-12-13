export function googleGetLngLatByAddress(map, address, callback) {
    var location = []
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode( { 'address': address}, function(results, status) { 
        if (status == google.maps.GeocoderStatus.OK) { 
            location = [results[0].geometry.location.lng(), results[0].geometry.location.lat()]
        } else { 
            if (mapType == 'Google') {
                location = [103.6839585, 1.3440852]
            }
            alert("Geocode was not successful for the following reason: " + status) 
        } 
        callback && callback({
            location: location
        })
    })
}
var infowindow=[]
var markerArr = []

export function googleLocalSearch(map, address, searchResultId, callback) {
    for ( let i in markerArr ) {
        markerArr[i].setMap(null)
    }
   
    var request = {
        bounds: map.getBounds(),
        query: address,
        location: map.getCenter()
    }

    var service = new google.maps.places.PlacesService(map)
    service.textSearch(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            googleSetMarker(map, results, callback)
        }
    })
}

function googleSetMarker(map, results, callback) {
    infowindow=[]
    for (var i = 0; i < results.length; i++) {
        var item = results[i]
        var uluru = {lat: item.geometry.location.lat(), lng: item.geometry.location.lng()}
        var marker = new google.maps.Marker({position: uluru, map: map})
        markerArr.push(marker)
        attachSecretMessage(map, marker, results, i, item, callback)
    }
}

function attachSecretMessage(map, marker, results, number, item, callback) {
    var contentString = '<div id="content">' +
                        '<h3 class="firstHeading">'+ item.name +'</h3>'+
                        '<p>地址：'+ item.formatted_address +'</p>'+
                        '</div>'
    infowindow.push(
        new google.maps.InfoWindow({
            content: contentString,
            size: new google.maps.Size(50,50)
        })
    )
    if (number === 0) {
        infowindow[0].open(map, marker)
        var location = [item.geometry.location.lng(), item.geometry.location.lat()]
        callback && callback(location,item.name)
    }
    google.maps.event.addListener(marker, 'click', function() {
        for (var j=0; j<infowindow.length; j++) {
            infowindow[j].close()
        }
        infowindow[number].open(map, this)
        var location = [item.geometry.location.lng(), item.geometry.location.lat()]
        callback && callback(location)
    })
}
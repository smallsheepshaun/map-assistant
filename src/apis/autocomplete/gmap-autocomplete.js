export function googleAutocomplete(map, city, inputId, addressText, callback) {
    let input = document.getElementById(inputId)
    let option = {
        type: 'address',
        componentRestrictions: {country: 'sg'}
    }
    let ac = new google.maps.places.Autocomplete(input, option)
    google.maps.event.addListener(ac, 'place_changed', function () {  
        let place = ac.getPlace()  
        const obj = {
            searchValue: place.formatted_address,
            addName: place.formatted_address.split(' ')[0],
            lng: place.geometry.location.lng(),
            lat: place.geometry.location.lat()
        }
        callback && callback(obj) 
    }) 
    return ac
}
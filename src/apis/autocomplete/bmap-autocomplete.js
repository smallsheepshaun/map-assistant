export function baiduAutocomplete(map, city, inputId, addressText, callback) {
    let ac = new BMap.Autocomplete({
        input: inputId,
        location: map,
    })
    if (city) {
       ac.setLocation(city)
    }
    ac.setInputValue(addressText)
    ac.addEventListener('onconfirm', (e) => {
        const searchKey = e.item.value
        let searchValue = searchKey.province + searchKey.city +
                          searchKey.district + searchKey.street + searchKey.business
        let loccalSearch = new BMap.LocalSearch(map, {
            onSearchComplete: (result) => {
                const point = result.getPoi(0).point
                const geco = new BMap.Geocoder()
                geco.getLocation(point, (rs) => {
                    const addComp = rs.addressComponents
                    const addName = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber
                    const obj = {
                        searchValue: searchValue,
                        addName: addName,
                        point: point
                        // ...point
                    }
                    callback && callback(obj)
                })
            },
        })
        loccalSearch.search(searchValue)
    })
    return ac
}
export function baiduLocalSearch(map, address, searchResultId, callback) {
    var location = []
    var localSearch = new BMap.LocalSearch(map, {
        renderOptions: {map: map, panel: searchResultId}
    })
    var keyword = address
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0)
        location = [poi.point.lng, poi.point.lat]
        callback && callback({
            location: location,
            addressTitle: poi.title
        })
    })
    localSearch.setInfoHtmlSetCallback(function(poi) {
        location = [poi.point.lng, poi.point.lat]
        callback && callback({
            location: location,
            addressTitle: poi.title
        })
    })
    localSearch.search(keyword)
}
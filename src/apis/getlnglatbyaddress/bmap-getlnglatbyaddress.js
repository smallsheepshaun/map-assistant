export function baiduGetLngLatByAddress(map, address, callback) {
    var location = []
    var localSearch = new BMap.LocalSearch(map)
    var keyword = address
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0)
        location = [poi.point.lng, poi.point.lat]
        callback && callback({
            location: location
        })
    })
    localSearch.search(keyword)
}
export function googleDeletePolygon(map, polygon) {
    if (polygon && polygon.div_) {
        if (polygon.div_.parentNode) {
            polygon.div_.parentNode.removeChild(polygon.div_)
        }
    } else if (polygon.setMap) {
        polygon.setMap(null)
    }
}
export function baiduGetViewport(map, pointArr) {
    const v = map.getViewport(pointArr)
    map.centerAndZoom(v.center, v.zoom)
}
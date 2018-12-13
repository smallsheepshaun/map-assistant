export function baiduAddPointCollection(map, pointArr, color) {
    const options = {
        size: 'BMAP_POINT_SIZE_BIG',
        shape: 'BMAP_POINT_SHAPE_STAR',
        color: color,
    }
    let pointCollection = new BMap.PointCollection(pointArr, options)
    map.addOverlay(pointCollection)
    return pointCollection
}
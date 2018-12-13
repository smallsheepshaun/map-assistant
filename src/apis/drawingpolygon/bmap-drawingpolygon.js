export function baiduDrawingPolygon(map, triangleCoords, editable) {
    const polygon = new BMap.Polygon(triangleCoords, {
        strokeColor: 'red',
        fillColor: '#FF4040',
        strokeWeight: 1,
        strokeOpacity: 0.8,
        fillOpacity: 0.3,
        strokeStyle: 'solid',
    })
    map.addOverlay(polygon)
    editable ? polygon.enableEditing() : ''
    return polygon
}
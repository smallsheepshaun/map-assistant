export function googleDrawingPolygon(map, triangleCoords, editable) {
    const bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: "#FF0000",
        fillOpacity: 0.3,
        editable: editable,
    })
    bermudaTriangle.setMap(map)
    return bermudaTriangle
}
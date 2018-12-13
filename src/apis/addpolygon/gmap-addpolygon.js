export function googleAddPolygon(map, callback) {
    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.POLYGON
            ],
        },
        polygonOptions: {
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            editable: true,
        },
    })
    drawingManager.setMap(map)
    //注册 多边形 绘制完成事件 
    google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
        callback && callback(polygon)
    })
}
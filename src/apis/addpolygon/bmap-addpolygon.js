export function baiduAddPolygon(map, callback) {
    const BMapLib = window.BMapLib
    const drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false,
        enableDrawingTool: true,
        drawingToolOptions: { 
            anchor: BMAP_ANCHOR_TOP_LEFT,
            offset: new BMap.Size(70, 8),
            drawingModes : [BMAP_DRAWING_POLYGON],
            drawingTypes : [
                BMAP_DRAWING_POLYGON
            ],
        },
        polygonOptions: {
            strokeColor: 'red',
            fillColor: '#FF4040',
            strokeWeight: 1,
            strokeOpacity: 0.8,
            fillOpacity: 0.3,
            strokeStyle: 'solid',
        },
    })
    const overlaycomplete = (e) => {
        callback && callback(e.overlay)
    }
    drawingManager.addEventListener('overlaycomplete', overlaycomplete)
}
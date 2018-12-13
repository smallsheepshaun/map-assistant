export function baiduAddLabel(map, obj) {
    const opts = {
        position: new BMap.Point(obj.lng, obj.lat),
        offset: new BMap.Size(-30, -10)
    }
    const label = new BMap.Label(obj.labelText, opts)
        label.setStyle({
        border: 'none',
        padding: 0,
    })
    map.addOverlay(label)
    return label
}
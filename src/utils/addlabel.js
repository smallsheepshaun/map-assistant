/**
 * 添加文本备注
 * map：创建的地图对象
 * obj属性:
 * lng: 经度
 * lat: 纬度
 * labelText：显示的文本内容
 */
import { baiduAddLabel } from '../apis/addlabel/bmap-addlabel.js'
import { googleAddLabel } from '../apis/addlabel/gmap-addlabel.js'

export function addLabel(map, obj) {
    if (window.MapType == 'GMap') {
        var overlay = googleAddLabel(map, obj)
    } else {
        var overlay = baiduAddLabel(map, obj)
    }
    return overlay
}
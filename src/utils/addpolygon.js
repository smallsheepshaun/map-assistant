/**
 * 添加多边形
 * map：创建的地图对象
 * obj属性:
 * callback：多边形绘画完成的回调
 */
import { baiduAddPolygon } from '../apis/addpolygon/bmap-addpolygon.js'
import { googleAddPolygon } from '../apis/addpolygon/gmap-addpolygon.js'

export function addPolygon(map, obj) {
    if (window.MapType == 'GMap') {
        googleAddPolygon(map, obj.callback)
    } else {
        baiduAddPolygon(map, obj.callback)
    }
}
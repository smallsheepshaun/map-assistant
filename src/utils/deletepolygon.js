/**
 * 删除多边形
 * map：创建的地图对象
 * obj属性:
 * polygon：多边形对象
 */
import { baiduDeletePolygon } from '../apis/deletepolygon/bmap-deletepolygon.js'
import { googleDeletePolygon } from '../apis/deletepolygon/gmap-deletepolygon.js'

export function deletePolygon(map, obj) {
    if (window.MapType == 'GMap') {
        if (obj.polygon.length > 0) {
            for (var i=0; i<obj.polygon.length; i++) {
            googleDeletePolygon(map, obj.polygon[i])
        }
        } else {
            googleDeletePolygon(map, obj.polygon)
        }
    } else {
        baiduDeletePolygon(map, obj.polygon)
    }
}
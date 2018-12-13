/**
 * 获取多边形的点数组
 * obj属性:
 * polygon：多边形对象
 */
import { baiduGetPath } from '../apis/getpath/bmap-getpath.js'
import { googleGetPath } from '../apis/getpath/gmap-getpath.js'

export function getPath(map, obj) {
    if (window.MapType == 'GMap') {
        var pathArr = googleGetPath(map, obj.polygon)
    } else {
        var pathArr = baiduGetPath(map, obj.polygon)
    }
    return pathArr
}

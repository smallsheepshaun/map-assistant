    /**
 * 获取point对象
 * obj属性:
 * lng: 经度
 * lat: 纬度
 */
import { baiduInitPoint } from '../apis/initpoint/bmap-initpoint.js'
import { googleInitPoint } from '../apis/initpoint/gmap-initpoint.js'

export function initPoint(obj) {
    if (window.MapType == 'GMap') {
        var point = googleInitPoint(obj)
    } else {
        var point = baiduInitPoint(obj)
    }
    return point
}
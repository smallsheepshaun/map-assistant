/**
 * 创建标记
 * map: 创建的map对象
 * obj属性:
 * lng: 经度
 * lat: 纬度
 */
import { baiduInitMarker } from '../apis/initmarker/bmap-initmarker.js'
import { googleInitMarker } from '../apis/initmarker/gmap-initmarker.js'

export function initMarker(map, obj) {
    if (window.MapType == 'GMap') {
        var marker = googleInitMarker(map, obj)
    } else {
        var marker = baiduInitMarker(map, obj)
    }
    return marker
}
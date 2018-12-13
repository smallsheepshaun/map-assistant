/**
 * 设置地图中心点和缩放级别
 * map: 地图对象
 * obj属性:
 * lng: 经度
 * lat: 纬度
 * zoom: 地图缩放级别
 */
import { baiduCenterAndZoom } from '../apis/centerandzoom/bmap-centerandzoom.js'
import { googleCenterAndZoom } from '../apis/centerandzoom/gmap-centerandzoom.js'

export function centerAndZoom(map, obj) {
    if (window.MapType == 'GMap') {
        googleCenterAndZoom(map, obj.lng, obj.lat, obj.zoom)
    } else {
        baiduCenterAndZoom(map, obj.lng, obj.lat, obj.zoom)
    }
}
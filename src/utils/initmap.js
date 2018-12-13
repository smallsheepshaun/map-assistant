/**
 * 创建地图
 * obj属性:
 * lng: 经度
 * lat: 纬度
 * zoom: 地图缩放级别
 * mapId: 地图div的id
 */
import { baiduInitMap } from '../apis/initmap/bmap-initmap.js'
import { googleInitMap } from '../apis/initmap/gmap-initmap.js'

export function initMap(obj) {
    var map = {}
    obj.zoom = obj.zoom ? obj.zoom : 15
    obj.mapId = obj.mapId ? obj.mapId : 'AllMap'
  
    if (window.MapType == 'GMap') {
        obj.lng = obj.lng ? obj.lng : 1.3440852
        obj.lat = obj.lat ? obj.lat : 103.6839585
        return googleInitMap(obj)
    } else {
        obj.lng = obj.lng ? obj.lng : 116.3886342
        obj.lat = obj.lat ? obj.lat : 39.9087141
        return baiduInitMap(obj)
    }
}
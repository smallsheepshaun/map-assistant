/**
 * 创建地图
 * map: 地图对象
 * obj属性:
 * lngLatArr: 经纬度对象数组
 */
import { getPointArr } from './getPointArr.js'
import { baiduGetViewport } from '../apis/getviewport/bmap-getviewport.js'
import { googleGetViewport } from '../apis/getviewport/gmap-getviewport.js'

export function getViewport(map, obj) {
    var pointArr = getPointArr(obj.triangleCoords)
    if (window.MapType == 'GMap') {
        googleGetViewport(map, pointArr)
    } else {
        baiduGetViewport(map, pointArr)
    }
}
/**
 * 添加海量点
 * map: 创建的map对象
 * obj属性:
 * lngLatArr: 经纬度对象数组
 * color: 海量点的颜色
 */
import { getPointArr } from './getPointArr.js'
import { baiduAddPointCollection } from '../apis/addpointcollection/bmap-addpointcollection.js'
import { googleAddPointCollection } from '../apis/addpointcollection/gmap-addpointcollection.js'

export function addPointCollection(map, obj) {
    var pointArr = getPointArr(obj.triangleCoords)
    if (window.MapType == 'GMap') {
        var pointCollection = googleAddPointCollection(map, pointArr, obj.color)
    } else {
        var pointCollection = baiduAddPointCollection(map, pointArr, obj.color)
    }
    return pointCollection
}
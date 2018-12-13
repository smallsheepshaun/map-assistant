/**
 * 根据坐标展示多边形
 * map：创建的地图对象
 * obj属性:
 * triangleCoords：多边形坐标
 * editable: 多边形是否可修改
 */
import { getPointArr } from './getPointArr.js'
import { baiduDrawingPolygon } from '../apis/drawingpolygon/bmap-drawingpolygon.js'
import { googleDrawingPolygon } from '../apis/drawingpolygon/gmap-drawingpolygon.js'

export function drawingPolygon(map, obj) {
    var pointArr = getPointArr(obj.triangleCoords)
    if (window.MapType == 'GMap') {
        var polygon = googleDrawingPolygon(map, pointArr, obj.editable)
    } else {
        var polygon = baiduDrawingPolygon(map, pointArr, obj.editable)
    }
    return polygon
}


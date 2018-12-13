/**
 * 获取point对象数组
 * triangleCoords：多边形坐标
 */
import { baiduInitPoint } from '../apis/initpoint/bmap-initpoint.js'
import { googleInitPoint } from '../apis/initpoint/gmap-initpoint.js'

export function getPointArr(triangleCoords) {
    let pointArr = []
    var initPoint = window.MapType == 'GMap' ? googleInitPoint : baiduInitPoint

    for (var i=0; i<triangleCoords.length; i++) {
        triangleCoords[i].mapType = window.MapType
        pointArr.push(initPoint(triangleCoords[i]))
    }
    return pointArr
}
/**
 * 添加控件
 * map: 创建的map对象
 * obj属性:
 * zoomControl: 启用/禁用缩放控件
 * mapTypeControl: 启用/禁用允许用户在地图类型（例如地图和卫星）之间切换的地图类型控件
 * streetViewControl: 启用/禁用Pegman控件，该控件允许用户激活街景全景图
 */
import { baiduAddControl } from '../apis/addcontrol/bmap-addcontrol.js'
import { googleAddControl } from '../apis/addcontrol/gmap-addcontrol.js'

export function addControl(map, obj) {
    if (window.MapType == 'GMap') {
        googleAddControl(map, obj)
    } else {
        baiduAddControl(map, obj)
    }
}
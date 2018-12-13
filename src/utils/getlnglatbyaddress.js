/**
 * 根据地址查询经纬度
 * map: map对象
 * obj属性:
 * address: 地址名称
 * callback: 查询后的回调
 */
import { baiduGetLngLatByAddress } from '../apis/getlnglatbyaddress/bmap-getlnglatbyaddress.js'
import { googleGetLngLatByAddress } from '../apis/getlnglatbyaddress/gmap-getlnglatbyaddress.js'

export function getLngLatByAddress(map, obj) {
    if (window.MapType == 'GMap') {
        var map = googleGetLngLatByAddress(map, obj.address, obj.callback)
    } else {
        var map = baiduGetLngLatByAddress(map, obj.address, obj.callback)
    }
}
/**
 * 关键字搜索
 * map: map对象
 * obj属性:
 * address: 地址名称
 * callback: 查询后的回调
 */
import { baiduLocalSearch } from '../apis/localsearch/bmap-localsearch.js'
import { googleLocalSearch } from '../apis/localsearch/gmap-localsearch.js'

export function localSearch(map, obj) {
    if (window.MapType == 'GMap') {
        googleLocalSearch(map, obj.address, obj.searchResultId, obj.callback)
    } else {
        baiduLocalSearch(map, obj.address, obj.searchResultId, obj.callback)
    }
}
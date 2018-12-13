/**
 * 搜索提示
 * map: 地图对象
 * obj属性:
 * city: 设置检索区域
 * addressText: 设置绑定的input控件的值
 * callback: 回调
 */
import { baiduAutocomplete } from '../apis/autocomplete/bmap-autocomplete.js'
import { googleAutocomplete } from '../apis/autocomplete/gmap-autocomplete.js'

export function autoComplete(map, obj) {
    if (window.MapType == 'GMap') {
        var ac = googleAutocomplete(map, obj.city, obj.inputId, obj.addressText, obj.callback)
    } else {
        var ac = baiduAutocomplete(map, obj.city, obj.inputId, obj.addressText, obj.callback)
    }
    return ac
}
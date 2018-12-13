// 百度地图
export function BaiDuReady(cb) {
    var mapReady = setInterval(() => {
        if (window.BMap) {
            clearInterval(mapReady)
            cb()
        }
    }, 200)
}

// 谷歌地图
export function GoogleReady(cb) {
    var mapReady = setInterval(() => {
        if (window.google) {
            clearInterval(mapReady)
            cb()
        }
    }, 200)
}
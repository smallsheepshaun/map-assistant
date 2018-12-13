var MyPointCollection = {}

export function googleAddPointCollection(map, pointArr, color) {
    var overlayArr = []
    for (var i = 0; i < pointArr.length; i++) {
        var overlay = new MyPointCollection(map, { latlng: pointArr[i], color: color})
        overlayArr.push(overlay)
    }
    return overlayArr
}

/***************谷歌地图的自定义叠加层******************/  
var mapReady = setInterval(() => {
    if (window.google) {
        clearInterval(mapReady)
        MyPointCollection = function (map, options) {
            this.latlng = options.latlng //设置图标的位置  
            this.color = options.color
            this.div_ = null 
            this.setMap(map)
        }
        MyPointCollection.prototype = new google.maps.OverlayView()  
        //初始化图标  
        MyPointCollection.prototype.onAdd = function() { 
            var div = document.createElement('div')
            div.style.position = 'absolute'  
            div.style.width = '10px'  
            div.style.height = '10px'  
            div.style.borderRadius = '100px'
            div.style.background = this.color

            this.div_ = div     
            var panes = this.getPanes()    
            panes.overlayMouseTarget.appendChild(div)   
        }
        //绘制图标，主要用于控制图标的位置  
        MyPointCollection.prototype.draw = function() {
            var overlayProjection = this.getProjection()     
            var position = overlayProjection.fromLatLngToDivPixel(this.latlng)  

            var div = this.div_
            div.style.left = position.x - 5 + 'px'    
            div.style.top  = position.y - 5 + 'px'  
            div.style.width  = '10px'  
        }
    }
}, 200)
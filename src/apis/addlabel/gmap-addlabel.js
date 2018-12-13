var MyMarker = {}

export function googleAddLabel(map, obj) {
    var point = new google.maps.LatLng(obj.lat, obj.lng)
    return new MyMarker(map, { latlng: point, labelText: obj.labelText })
}

/***************谷歌地图的自定义叠加层******************/  
var mapReady = setInterval(() => {
    if (window.google) {
        clearInterval(mapReady)
        MyMarker = function (map, options) {
            this.latlng = options.latlng //设置图标的位置  
            this.labelText = options.labelText || '标记'  
            this.div_ = null 
            this.setMap(map)
        }
        MyMarker.prototype = new google.maps.OverlayView()
        //初始化图标  
        MyMarker.prototype.onAdd = function() {      
            var div = document.createElement('div')
            div.style.position = "absolute"

            var label = document.createElement('div')
            label.innerText = this.labelText  
            label.style.position = 'absolute'  
            label.style.textAlign = 'center'
            label.style.fontSize = "12px"
            label.style.padding = "2px 10px"
            label.style.background = "#ffffff"

            div.appendChild(label)

            this.div_ = div     
            var panes = this.getPanes()    
            panes.overlayMouseTarget.appendChild(div)   
        }
        //绘制图标，主要用于控制图标的位置  
        MyMarker.prototype.draw = function() {      
            var overlayProjection = this.getProjection()     
            var position = overlayProjection.fromLatLngToDivPixel(this.latlng)  

            var div = this.div_
            div.style.left = position.x - 30 + 'px'    
            div.style.top  = position.y - 10 + 'px'  
            div.style.width  = '300px'  
        }
    }
}, 200)
import BMAP_DEFAULT_CONFIG from '../config/bmap-default-config.js'
import GMAP_DEFAULT_CONFIG from '../config/gmap-default-config.js'

export default class MapAPILoader {
    /**
     * @param config required 初始化参数
     */
    constructor(MapType, config) {
        config = !config ? MapType : !config
        MapType = !config ? 'BMap' : MapType

        if (MapType == 'BMap') {
            config.ak = config.key
            delete config.key
        }

        this._config = MapType == 'GMap' ? Object.assign(GMAP_DEFAULT_CONFIG, config) : Object.assign(BMAP_DEFAULT_CONFIG, config)
        this._document = document
        this._window = window
        this._window.MapType = MapType
    }

    load() {
        const script = this._document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.defer = true
        script.src = this._getScriptSrc()
        this._document.head.appendChild(script)

        this._baiDuReady(() => {
            if (this._config.plugin.indexOf('addPolygon') > -1) {
                const link = this._document.createElement('link');
                link.type = 'text/css'
                link.rel = 'stylesheet'
                link.href = '/static/lib/DrawingManager_min.css'
                this._document.head.appendChild(link)

                const script1 = this._document.createElement('script')
                script1.type = 'text/javascript'
                script1.async = true
                script1.defer = true
                script1.src = '/static/lib/DrawingManager_min.js'
                this._document.head.appendChild(script1)
            }
        })
    }

    _baiDuReady(cb) {
        var mapReady = setInterval(() => {
            if (window.BMap) {
                clearInterval(mapReady)
                cb()
            }
        }, 200)
    }

    _getScriptSrc() {
      const config = this._config
      let params = Object.entries(config).map((item) => {
                        if (item[0] != 'protocol' && item[0] != 'hostAndPath' && item[0] != 'plugin') {
                            return item.join('=')
                        }
                    }).join('&')
      return `${this._config.protocol}://${this._config.hostAndPath}?${params}`
    }
}
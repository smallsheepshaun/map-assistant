import PLUGIN from './plugin.js'

const GMAP_DEFAULT_CONFIG = {
    key: null,
    protocol: 'https',
    hostAndPath: 'maps.googleapis.com/maps/api/js',
    plugin: PLUGIN,
    libraries: 'drawing, places'
}

export default GMAP_DEFAULT_CONFIG
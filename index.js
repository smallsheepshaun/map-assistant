import { initAMapApiLoader } from './services/injected-map-api-instance'
import { addControl } from './src/utils/addcontrol'
import { addLabel } from './src/utils/addlabel'
import { addPointCollection } from './src/utils/addpointcollection'
import { addPolygon } from './src/utils/addpolygon'
import { autoComplete } from './src/utils/autocomplete'
import { centerAndZoom } from './src/utils/centerandzoom'
import { deletePolygon } from './src/utils/deletepolygon'
import { drawingPolygon } from './src/utils/drawingpolygon'
import { getLngLatByAddress } from './src/utils/getlnglatbyaddress'
import { getPath } from './src/utils/getpath'
import { getViewport } from './src/utils/getviewport'
import { initMap } from './src/utils/initmap'
import { initMarker } from './src/utils/initmarker'
import { initPoint } from './src/utils/initpoint'
import { localSearch } from './src/utils/localsearch'

let Map =  {
    addControl,
    addLabel,
    addPointCollection,
    addPolygon,
    autoComplete,
    centerAndZoom,
    deletePolygon,
    drawingPolygon,
    getLngLatByAddress,
    getPath,
    getViewport,
    initMap,
    initPoint,
    initMarker,
    localSearch,
}

export default Map
export {initAMapApiLoader}
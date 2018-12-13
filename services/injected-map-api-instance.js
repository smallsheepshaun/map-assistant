import AMapAPILoader from './lazy-map-api-loader'

let lazyAMapApiLoaderInstance = null
export const initAMapApiLoader = (mapType, config) => {
  if (lazyAMapApiLoaderInstance) return
  if (!lazyAMapApiLoaderInstance) lazyAMapApiLoaderInstance = new AMapAPILoader(mapType, config)
  lazyAMapApiLoaderInstance.load()
}
export { lazyAMapApiLoaderInstance }

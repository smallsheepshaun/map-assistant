# JS封装百度与谷歌地图组件

### 安装

```bash
npm i --save map-assistant
```

### 初始化

```javascript
import Vue from 'vue'
import {initAMapApiLoader} from 'map-assistant'

// 百度地图初始化
initAMapApiLoader(BaiduMap, {
    key: 'YOUR_KEY'
})

// 谷歌地图初始化
initAMapApiLoader('GMap', {
    key: 'YOUR_KEY',
    libraries: 'drawing,places' // 如需使用绘制工具请写入drawing  如需地址查询搜索功能请写入places
})
```

### 使用

```vue
<template>
   <div id="map"></div>
</template>

<style>

/* 地图容器必须设置宽和高属性 */
#map {
    width: 400px;
    height: 300px;
}
</style>

/* 在需要用到方法的页面引入 */
import mapAssistant from 'map-assistant'

// 创建地图
var map = mapAssistant.initMap({
    lng: 116.4035,
    lat: 39.915, 
    zoom: 8, 
    mapId: 'map'
})

// 添加控件
mapAssistant.addControl(this.map, {
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true
})

```

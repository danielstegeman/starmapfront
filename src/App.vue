<template>
  <div id="app">
  
    <MapCanvas/>
   
  </div>
</template>

<script>
    //import StarInfoScreen from './components/StarInfoScreen.vue'
    import MapCanvas from './components/MapCanvas.vue'
    

export default {
  name: 'app',
        components: {
      MapCanvas
      //StarInfoScreen
  }
}
</script>


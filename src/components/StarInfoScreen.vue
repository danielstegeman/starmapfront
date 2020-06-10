<template>
  <div class="interface infoPanel" v-if="selectedStar">
    
    <ul>{{selectedStar.displayName}}</ul>
    <ul>{{selectedStar.spect}}</ul>
    <ul>X : {{selectedStar.x}} Y : {{selectedStar.x}} Z : {{selectedStar.x}}</ul>
   
    <ul v-if='selectedStar.compPrimary'>Primary star: {{selectedStar.compPrimary}}</ul>
    <ul v-if='selectedStar.mag'>Magnitude {{selectedStar.mag}}</ul>
    <ul>Ablosute magnitude {{selectedStar.absmag}}</ul>
  </div>
  <div class="infoPanel" v-else>No Star Selected</div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "StarInfoScreen",
 
  props:{
    selectedStar :null
  },
  created() {
    //axios.get('api/stars/0').then(response => this.star = response)
  },

  methods: {
    getStar: function(id) {
      return fetch("api/stars/" + id)
        .then(Response => Response.json())
        .then(data => (this.star = data));
    }
  }
};
</script>
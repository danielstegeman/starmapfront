<template>
  
    <div class="card">
      <div class="card-body" v-if="selectedStar">
        <ul>{{selectedStar.displayName}}</ul>
        <ul>{{selectedStar.spect}}</ul>
        <ul>X : {{selectedStar.x}} Y : {{selectedStar.x}} Z : {{selectedStar.x}}</ul>

        <ul v-if="primaryStar">Primary star: {{primaryStar.displayName}}</ul>
        <ul v-if="selectedStar.mag">Magnitude {{selectedStar.mag}}</ul>
        <ul>Ablosute magnitude {{selectedStar.absmag}}</ul>
      </div>
      <div class="card" v-else>No Star Selected</div>
    
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "StarInfoScreen",
  data(){
    return{
      primaryStar:null
    }
  },
  props: {
    selectedStar: null
  },
  watch:{
    selectedStar : function(newVal){
      if(newVal.compPrimary){
          this.getStar(newVal.compPrimary)
      }else{
        this.primaryStar = null
      }
    }
  },
  created() {
    //axios.get('api/stars/0').then(response => this.star = response)
  },

  methods: {
    getStar: function(id) {
      this.$axios.get("stars/"+id)
      .then(response => (this.primaryStar = response.data));
    }
  }
};
</script>
<template>
  <div class="interface infoPanel" v-if="selectedStar">
    <ul>{{selectedStar.proper}}</ul>
  </div>
  <div class="infoPanel" v-else>No Star Selected</div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "StarInfoScreen",
 
  data() {
    return {
      selectedStar: this.$unityConnector.SelectedStar
    };
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
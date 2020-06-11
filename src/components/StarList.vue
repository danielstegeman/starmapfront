<template>
  <div>
    <div class="interface centerpanel">
      <div v-for="star in this.stars" v-bind:key="star.id">
        <ul>{{star.displayName}} 
            <button v-on:click="setSelectedStar(star)">Select</button>
            <button v-on:click="this.$modal.show(StarUpdate)">Edit</button>
        </ul>
      </div>
    </div>
    
    <StarInfoScreen class="interface" v-bind:selectedStar="selectedStar"></StarInfoScreen>
  </div>
</template>
<script>
import StarInfoScreen from "./StarInfoScreen.vue";
import StarUpdate from "./StarUpdate.vue"
export default {
  name: "StarList",
  components: {
    StarInfoScreen,
    StarUpdate
  },
  data() {
    return {
      selectedStar: null,
      stars: []
    };
  },
 
  mounted() {
    this.getStarsInRange(50);
    this.$axios
      .get("stars/0")
      .then(response => (this.selectedStar = response.data));
  },
  methods: {
    apiParamFromPosition() {
      var param = "x=0&y=0&z=0";
      return param;
    },
    getStarsInRange(range) {
      this.$axios
        .get("stars/range?" + this.apiParamFromPosition() + "&range=" + range)
        .then(response => {
          this.stars = response.data;
        });
    },
    setSelectedStar(star){
        this.selectedStar = star
    }
  }
};
</script>
<template>
  <div class="container-fluid d-flex flex-column flex-grow-1 vh-100 overflow-hidden">
    <div class="row flex-grow-1 overflow-hidden">
      <div class="col-6 mh-100 overflow-auto">
        <div v-for="star in this.stars" v-bind:key="star.id">
          <div class="row">

            <span class="col"> {{star.displayName}}</span>
            <div class="col-1"><button class= "btn btn-primary" v-on:click="setSelectedStar(star)">Select</button></div>
            <div class="col-1"><button class = "btn btn-secondary" v-on:click="showUpdate(star)">Edit</button></div>
          </div>
          
        </div>
      </div>
      <div class="col-4">
        <div class = "row">

        <StarInfoScreen v-bind:selectedStar="selectedStar"></StarInfoScreen>
        </div>
        <div class = "row">
        <star-update v-bind:star="selectedStar" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarInfoScreen from "./StarInfoScreen.vue";
import StarUpdate from "./StarUpdate.vue";
export default {
  name: "StarList",
  components: {
    StarInfoScreen,
    StarUpdate
  },
  data() {
    return {
      selectedStar: null,
      stars: [],
      showUpdateModal: false
    };
  },

  mounted() {
    this.getStarsInRange(50);
    this.$axios
      .get("stars/0")
      .then(response => (this.selectedStar = response.data));
  },
  methods: {
    showUpdate(star) {
      this.selectedStar = star;
      this.showUpdateModal = true;
    },
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
    setSelectedStar(star) {
      this.selectedStar = star;
    }
  }
};
</script>
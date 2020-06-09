<template>
  <div id="menu" class="navbar interface" style="position:fixed;">
    <div class="navbar-inner">
      <ul class="nav">
        <li class="nav">
          <label class="btn btn-secondary active">
            <input type="checkbox" autocomplete="off" v-on:change="onShowNearByStars" /> Nearby stars
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuBar",
  data() {
    return {
      showStarList: false
    };
  },
  methods: {
    onShowNearByStars: function(e) {
      this.showStarList = e.target.checked;
      this.$emit("onShowStarList", e.target.checked);
    }
  }
};
</script>
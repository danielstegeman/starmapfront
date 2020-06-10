<template>
  <div id="mapArea">
    <StarInfoScreen class="interface" v-bind:selectedStar="selectedStar" />
    <MenuBar @onShowStarList="onShowStarList" />
    <StarList v-if="this.showStarList" v-bind:stars="stars" />
    <unity
      id="mapScreen"
      src="../../UnityDev/Build/UnityDev.json"
      unityLoader="../../UnityDev/Build/UnityLoader.js"
      ref="unityInstance"
    ></unity>
  </div>
</template>
<script>
import StarInfoScreen from "./StarInfoScreen.vue";
import Unity from "vue-unity-webgl";
import MenuBar from "./MenuBar.vue";
import StarList from "./StarList.vue";
var isUpdated = false;

export default {
  name: "MapCanvas",
  data() {
    return {
      stars: [],
      selectedStar: this.$unityConnector.SelectedStar,
      webglReady: this.$unityConnector.webglReady,
      cameraPos: this.$unityConnector.cameraPos,
      showStarList: false
    };
  },

  watch: {
    webglReady: function(val) {
      if (val == true && !isUpdated) {
        this.getStarsInRange(100);
        this.$refs.unityInstance.SendMessage(
          "JSConnector",
          "UpdateStarBuffer",
          this.stars
        );
        isUpdated = true;
      }
    }
  },
  components: {
    StarInfoScreen,
    MenuBar,
    Unity,
    StarList
  },
  mounted() {
    // map.init();
    //map.viewPortTest();
    this.$unityConnector.unityInstance = this.$refs.unityInstance;
    this.$axios
      .get("stars/0")
      .then(response => (this.$unityConnector.SelectedStar = response.data));
    if (!this.$unityConnector.UseUnity) {
      this.$unityConnector.SetCameraPos(0, 0, 0);
      this.getStarsInRange(100);
    }
  },
  updated() {
    // map.updateStarBuffer(this.stars);
  },
  methods: {
    starBufferAlert() {
      window.alert(this.stars.length + "||" + JSON.stringify(this.stars));
    },
    apiParamFromPosition() {
      var param =
        "x=" +
        this.cameraPos.x +
        "&y=" +
        this.cameraPos.y +
        "&z=" +
        this.cameraPos.z;
      return param;
    },
    getStarsInRange(range) {
      this.$axios
        .get("stars/range?" + this.apiParamFromPosition() + "&range=" + range)
        .then(response => {
          this.stars = response.data;
          if (this.$unityConnector.useUnity) {
            this.$refs.unityInstance.SendMessage(
              "JSConnector",
              "UpdateStarBuffer",
              this.stars
            );
          }
        });
    },
    onShowStarList(value) {
      this.showStarList = value;
    }
  }
};
</script>
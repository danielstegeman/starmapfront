<template>
  <div class="card">
    <div class="card-body">
      <form id="StarUpdateInput">
        <ul>
          <input v-model="star.proper" />
        </ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
        <button class="btn btn-success" v-on:click="submitChange">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "StarUpdate",
  props: {
    star: null
  },
  methods: {
    beforeOpen(e) {
      this.star = e.params.star;
    },
    submitChange() {
      this.$axios.post("stars/UpdateStar", {
        star: this.star
      });
    }
  }
};
</script>
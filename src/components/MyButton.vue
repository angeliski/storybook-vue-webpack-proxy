<template>
  <div>
    <button class="button is-primary" @click="onClick">
      <slot></slot>
    </button>
    <img :src="cat" v-if="cat" width="300" height="300">
  </div>
</template>

<script>
export default {
  name: "my-button",

  data() {
    return {
      cat: ""
    };
  },
  methods: {
    onClick() {
      this.$http
        .get("/api")
        .then(({ data }) => (this.cat = data.file));
    }
  }
};
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>

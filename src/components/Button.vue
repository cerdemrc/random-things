<template>
  <button class="btn btn-info" @click="boring()">I'm Boring!</button>
</template>

<script>
export default {
  methods: {
    boring() {
      this.$store.dispatch("boring");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: fixed;
  top: 30em;
  margin-left: 44%;
  width: 200px;
  height: 60px;
  border-radius: 5px;
  font-size: 1.2em;
  transition: 0.3s;

  &:hover {
    box-shadow: 5px 5px 5px darkslategrey;
  }
}

@media screen and (max-width: 400px) {
  .btn {
    width: 100px;
    height: 40px;
    margin-left: 35%;
    font-size: 0.7em;
  }
}
</style>
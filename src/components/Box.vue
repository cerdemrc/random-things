<template>
  <div class="things-box" v-if="todo">
    <h1>{{ todo }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    todo() {
      return this.$store.getters.getTodo;
    },
  },
};
</script>

<style lang="scss" scoped>
.things-box {
  position: relative;
  left: 15%;
  width: 30vw;
  margin-left: 18vw;
  padding: 1em 2em 5em 2em;
  margin-top: 8em;
  border-radius: 50px;
  border: 1px solid black;
  background-color: rgb(118, 118, 219);

  h1 {
    font-size: 2em;
    color: orange;
    margin-top: 1em;
    text-align: center;
    text-shadow: 1px 1px black;
  }
}

@media screen and (max-width: 400px) {
  .things-box {
    width: 50vw;
    height: 20vw;
    margin-left: 3vw;
    margin-top: 5em;

    h1 {
      font-size: 18px;
      margin-top: 3em;
    }
  }
}
</style>
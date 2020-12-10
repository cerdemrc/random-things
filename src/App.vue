<template>
  <div class="app container mt-5">
    <h1>- Random Things -</h1>
    <Box />
    <Button />
  </div>
</template>

<script>
import Box from "./components/Box";
import Button from "./components/Button";
export default {
  name: "App",
  components: {
    Box,
    Button,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 40px;
  font-family: Luckiest Guy;
  letter-spacing: 5px;
  color: orange;
  text-shadow: 2px 2px black;
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 1.3em;
  }
}
</style>

<template>
  <div id="app">
    <the-navigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "./components/Navigation/TheNavigation";

export default {
  name: "App",
  components: {
    TheNavigation
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
</style>

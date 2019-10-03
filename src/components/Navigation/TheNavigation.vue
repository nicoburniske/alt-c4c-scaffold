<template>
  <div class="header">
    <div class="title">
      <h3>C4C Scaffold</h3>
    </div>

    <div class="navlinks">
      <router-link to="/" tag="button">Home</router-link>
      <router-link to="/journal" tag="button">Journal</router-link>
      <router-link to="/notes" tag="button">Notes</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: rgb(204, 112, 166);
  font-family: "Montserrat", sans-serif;

  .title {
    text-transform: uppercase;
    letter-spacing: 6px;
  }
  .navlinks {
    display: flex;
    justify-content: space-around;
    width: 25%;
  }
  button {
    letter-spacing: 4px;
    background: none;
    text-decoration: none;
    border: none;
    font-weight: bold;
    padding: 1em;
  }
}
</style>

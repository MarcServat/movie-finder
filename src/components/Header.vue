<template>
  <header class="page-header">
    <a href="https://www.lovetoknow.com/">
      <img class="logo" src="../assets/logo.png" />
    </a>
    <RouterLink class="home-link" to="/search">HOME</RouterLink>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.logo {
  display: inline-block;
  color: rgb(41, 157, 233);
  text-transform: lowercase;
  width: 30%;
  float: left;
  height: auto;
}

.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  background-color: #163247;
}

.home-link {
  align-self: center;
  color: #e31721;
  font-family: "Open Sans", sans-serif;
}
</style>

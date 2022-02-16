<template>
  <div class="">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,800;1,400&display=swap');
#app {
  font-family: 'Red Hat Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  color: #000000;
  background: #FAFBFF;;
}

#nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  height: auto;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
  border-radius: 16px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>

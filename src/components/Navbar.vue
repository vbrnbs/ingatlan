<template>
  <!-- Navigation Bar -->
  <!-- Collapse Content-->
  <div class="fixed-top">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="p-4 bg-light" id="nav">
        <ul>
          <li><router-link to="/">Lista</router-link></li>
          <li><router-link to="/Kedvencek">Kedvencek</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
    <!-- Bar-->
    <nav class="navbar fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler navbar-light d-xl-none d-xl-block" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  height: 65px;
  border-radius: 0 0 10px 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
  border-radius: 0px 0px 16px 16px;
}

.navbar-light .navbar-toggler-icon {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(50,62,200)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
}
</style>

<template>
  <div class="container d-flex">
    <Navbar />
    <Sidebar />
    <List />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    List,
    Navbar,
    Sidebar,
    Footer
  }
}
</script>

<style>
  .home {
    display: flex;
  }
</style>

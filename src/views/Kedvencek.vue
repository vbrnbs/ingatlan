<template>
  <div class="kedvenc container d-flex">
    <Navbar />
    <Sidebar />
    <KedvencekEl />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
import KedvencekEl from '../components/KedvencekEl.vue'

export default {
  name: 'Kedvencek',
  components: {
    Navbar,
    Footer,
    Sidebar,
    KedvencekEl
  }
}
</script>

<style>
.kedvenc{
  margin-bottom: 169px;
}
</style>

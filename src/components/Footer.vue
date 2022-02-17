<template>
  <footer class="container-fluid fixed-bottom"></footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  height: 69px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
}

@media (max-width: 575.98px) {
  footer{
    height: 100px;
  }
}
</style>

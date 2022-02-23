<template>
  <div class="kedvencek col-lg-9 px-4">
        <!-- lista fejléc -->
    <div class="list-header container-fluid py-3 px-4">
      <h5 class="m-0 fw-bold">Kedvencek</h5>
      <h6 class="m-0">{{ this.$store.getters.countLinks }} db</h6>
    </div>
    <!-- lista elem container -->
    <div class="mt-3">
      <!-- lista elem -->
      <div v-for="ad in this.$store.state.kedvencek" :key="ad.address" class="ingatlan d-flex bg-white my-2">
        <!-- ingatlan-kép -->
        <div class="ingatlan-image">
          <img :src="ad.image" alt="ingatlan-fotó" class="">
        </div>
        <!-- ingatlan-leírás -->
        <div class="d-flex-column p-3">
          <router-link :to="{ name: 'Ingatlan', params: { id:ad.adId } }">
            <p class="fs-5 fw-bolder">{{ ad.address }}</p>
          </router-link>
          <p class="fs-6 fw-bold">{{ new Intl.NumberFormat('de-DE').format(ad.price) }} {{ ad.currency }}</p>
          <div class="d-flex align-items-center mt-4">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2H11.5V1.25C11.5 0.8375 11.1625 0.5 10.75 0.5C10.3375 0.5 10 0.8375 10 1.25V2H4V1.25C4 0.8375 3.6625 0.5 3.25 0.5C2.8375 0.5 2.5 0.8375 2.5 1.25V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 13.25C12.25 13.6625 11.9125 14 11.5 14H2.5C2.0875 14 1.75 13.6625 1.75 13.25V5.75H12.25V13.25ZM4.75 8.75V7.25H3.25V8.75H4.75ZM6.25 7.25H7.75V8.75H6.25V7.25ZM10.75 8.75V7.25H9.25V8.75H10.75Z" fill="#191919"/>
            </svg>
            <p class="m-0 px-2">{{ ad.uploadDate }}</p>
          </div>
          <!-- kedvenc-csillag addToObject(ad)-->
          <star class="star" v-on:click="$store.dispatch('removeFromFavorites', ad)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from './Star.vue'
// import List from './List.vue'
export default {
  name: 'KedvencekEl',
  components: {
    star
    // List
  },
  computed: {
    kedvi: function () {
      return this.$store.state.kedvencek.filter((k) =>
        k.kedvenc === true
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kedvencek {
  margin-top: 105px;
}
</style>

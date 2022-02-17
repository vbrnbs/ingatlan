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
          <p class="fs-5 fw-bolder">{{ ad.address }}</p>
          <p class="fs-6 fw-bold">{{ new Intl.NumberFormat('de-DE').format(ad.price) }} {{ ad.currency }}</p>
          <div class="d-flex">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2H11.5V1.25C11.5 0.8375 11.1625 0.5 10.75 0.5C10.3375 0.5 10 0.8375 10 1.25V2H4V1.25C4 0.8375 3.6625 0.5 3.25 0.5C2.8375 0.5 2.5 0.8375 2.5 1.25V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 13.25C12.25 13.6625 11.9125 14 11.5 14H2.5C2.0875 14 1.75 13.6625 1.75 13.25V5.75H12.25V13.25ZM4.75 8.75V7.25H3.25V8.75H4.75ZM6.25 7.25H7.75V8.75H6.25V7.25ZM10.75 8.75V7.25H9.25V8.75H10.75Z" fill="#191919"/>
            </svg>
            <p>{{ ad.uploadDate }}</p>
          </div>
          <!-- kedvenc-csillag addToObject(ad)-->
          <button v-on:click="$store.dispatch('removeFromFavorites', userData)"  class="star-container d-flex align-items-center justify-content-center">
            <svg  width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.20624 21.9396L5.20383 21.9378C5.13917 21.8893 5.10924 21.8429 5.09371 21.7536C5.07337 21.6366 5.07877 21.4197 5.1936 21.0745C5.19379 21.0739 5.19399 21.0733 5.19419 21.0727L7.3323 14.7427L7.56909 14.0416L6.9679 13.6102L1.51935 9.7003L1.51936 9.70028L1.51434 9.69673C1.21534 9.48493 1.08171 9.3123 1.03024 9.20756C0.993374 9.13253 0.992083 9.08839 1.01624 9.01923L1.01768 9.01506C1.04443 8.93736 1.07975 8.89484 1.15763 8.85349C1.26004 8.79911 1.46612 8.73688 1.83143 8.74099L1.83476 8.74102L8.50582 8.79371L9.24252 8.79953L9.46642 8.09766L11.4994 1.72473C11.6189 1.35881 11.7448 1.17367 11.8299 1.08999C11.8905 1.03042 11.9309 1.01611 12.0021 1.01611C12.0751 1.01611 12.1187 1.03184 12.1801 1.0919C12.2643 1.17424 12.3892 1.35697 12.5023 1.71731L12.5023 1.71731L12.5037 1.72169L14.5377 8.09766L14.7616 8.79953L15.4983 8.79371L22.1694 8.74103L22.1727 8.74099C22.5383 8.73688 22.7427 8.79922 22.8435 8.85318C22.9189 8.89358 22.9562 8.93633 22.9848 9.02089C23.0075 9.08772 23.0068 9.1336 22.9692 9.21047C22.9181 9.31478 22.7862 9.48678 22.4898 9.69673L22.4898 9.69672L22.4848 9.7003L17.0362 13.6102L16.435 14.0416L16.6718 14.7427L18.8099 21.0727C18.8101 21.0733 18.8103 21.0739 18.8105 21.0745C18.9254 21.4197 18.9308 21.6366 18.9104 21.7536C18.8949 21.8429 18.865 21.8893 18.8003 21.9378L18.7979 21.9396C18.7416 21.982 18.7073 21.9918 18.6299 21.9799C18.5136 21.962 18.303 21.8848 17.9873 21.6559C17.9867 21.6555 17.9861 21.655 17.9854 21.6545L12.594 17.6952L12.0021 17.2605L11.4102 17.6952L6.01869 21.6545C6.01803 21.655 6.01738 21.6555 6.01672 21.656C5.7011 21.8848 5.49055 21.962 5.37421 21.9799C5.29679 21.9918 5.26248 21.982 5.20624 21.9396Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

export default {
  name: 'KedvencekEl'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kedvencek {
  margin-top: 105px;
}
</style>

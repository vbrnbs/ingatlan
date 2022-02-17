<template>
  <div class="list col-xs-12 col-lg-9 px-4">
    <!-- lista fejléc -->
    <div class="list-header container-fluid py-3 px-4">
      <h5 class="m-0 fw-bold">Lista</h5>
      <h6 class="m-0">{{ ads.length }} db</h6>
    </div>
    <!-- lista elem container -->
    <div class="mt-3">
      <!-- lista elem -->
      <div v-for="ad in ads" :key="ad.status" class="ingatlan d-flex bg-white my-2">
        <!-- ingatlan-kép -->
        <div class="ingatlan-image">
          <img :src="ad.image" alt="ingatlan-fotó">
        </div>
        <!-- ingatlan-leírás -->
        <div class="d-flex-column p-3">
          <router-link :to="{ name: 'Ingatlan', params: { id:ad.adId } }">
            <p class="fs-5 fw-bolder">{{ ad.address }}</p>
          </router-link>
          <p class="fs-6 fw-bold">{{ new Intl.NumberFormat('de-DE').format(ad.price) }} {{ ad.currency }}</p>
          <!-- kedvenc-csillag addToObject(ad)-->
              <button class="star-container d-flex justify-self-end align-items-center justify-content-center">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path v-on:click="addClass = !addClass" :class="{'myClass': isAddClass}" d="M5.20624 21.9396L5.20383 21.9378C5.13917 21.8893 5.10924 21.8429 5.09371 21.7536C5.07337 21.6366 5.07877 21.4197 5.1936 21.0745C5.19379 21.0739 5.19399 21.0733 5.19419 21.0727L7.3323 14.7427L7.56909 14.0416L6.9679 13.6102L1.51935 9.7003L1.51936 9.70028L1.51434 9.69673C1.21534 9.48493 1.08171 9.3123 1.03024 9.20756C0.993374 9.13253 0.992083 9.08839 1.01624 9.01923L1.01768 9.01506C1.04443 8.93736 1.07975 8.89484 1.15763 8.85349C1.26004 8.79911 1.46612 8.73688 1.83143 8.74099L1.83476 8.74102L8.50582 8.79371L9.24252 8.79953L9.46642 8.09766L11.4994 1.72473C11.6189 1.35881 11.7448 1.17367 11.8299 1.08999C11.8905 1.03042 11.9309 1.01611 12.0021 1.01611C12.0751 1.01611 12.1187 1.03184 12.1801 1.0919C12.2643 1.17424 12.3892 1.35697 12.5023 1.71731L12.5023 1.71731L12.5037 1.72169L14.5377 8.09766L14.7616 8.79953L15.4983 8.79371L22.1694 8.74103L22.1727 8.74099C22.5383 8.73688 22.7427 8.79922 22.8435 8.85318C22.9189 8.89358 22.9562 8.93633 22.9848 9.02089C23.0075 9.08772 23.0068 9.1336 22.9692 9.21047C22.9181 9.31478 22.7862 9.48678 22.4898 9.69673L22.4898 9.69672L22.4848 9.7003L17.0362 13.6102L16.435 14.0416L16.6718 14.7427L18.8099 21.0727C18.8101 21.0733 18.8103 21.0739 18.8105 21.0745C18.9254 21.4197 18.9308 21.6366 18.9104 21.7536C18.8949 21.8429 18.865 21.8893 18.8003 21.9378L18.7979 21.9396C18.7416 21.982 18.7073 21.9918 18.6299 21.9799C18.5136 21.962 18.303 21.8848 17.9873 21.6559C17.9867 21.6555 17.9861 21.655 17.9854 21.6545L12.594 17.6952L12.0021 17.2605L11.4102 17.6952L6.01869 21.6545C6.01803 21.655 6.01738 21.6555 6.01672 21.656C5.7011 21.8848 5.49055 21.962 5.37421 21.9799C5.29679 21.9918 5.26248 21.982 5.20624 21.9396Z"/>
                </svg>
                <!-- v-on:click="isActive = !isActive" v-bind:class="{ active: isActive } -->
              </button>
          <star class="star" @click="$store.dispatch('addToFavorites', ad)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from './Star.vue'
export default {
  data () {
    return {
      ads: [],
      inputData: {},
      isAddClass: false
    }
  },
  mounted () {
    fetch('http://localhost:3000/ads')
      .then(res => res.json())
      .then(data => (this.ads = data))
      .catch(err => console.log(err.message))
  },
  methods: {
    addClass: function () {
      this.isAddClass = true
    }
  },
  components: {
    star
  }
}
</script>

<style>
.list {
  margin-top: 105px;
}
a {
    color: black !important;
}
.list-header{
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(50, 62, 200, 0.1));
}
.ingatlan{
  height: 180px;
  filter: drop-shadow(0px 0px 10px rgba(50, 62, 200, 0.2));
  border-radius: 16px;
}
.ingatlan-image{
  height: 180px;
  width: 212px;
  background: #637181;
  border-radius: 16px 0 0 16px;
}
.ingatlan-image > img {
  height: 180px;
  width: 212px !important;
  object-fit: cover;
  border-radius: 16px 0 0 16px;
}
.star {
  position: absolute;
  top: 30px;
  right: 20px;
}

</style>

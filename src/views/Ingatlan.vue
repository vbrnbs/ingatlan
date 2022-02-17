<template>
    <Navbar />
    <div class="container d-flex flex-column align-items-center">
        <div id="ingatlan" class="row w-100 d-flex justify-content-between">
                <div class="col-md-3">
                    <button>Vissza</button>
                </div>
                <div class="col-md-9">
                    <div class="container-fluid d-flex align-items-center h-100 bg-warning rounded-3">Kedvencek</div>
                </div>
        </div>
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <div class="container kedvencek-wrapper">
                <div class="row">
                    <div class="col">
                        <img :src="ingatlan.image" alt="" class="rounded-start">
                    </div>
                    <div class="col">
                        <img :src="ingatlan.image" alt="" class="rounded-start">
                    </div>
                    <div class="col">
                        <div class="row h-25">
                            <div class="col">
                                <img :src="ingatlan.image" alt="" class="rounded-start h-50 w-auto">
                            </div>
                        </div>
                        <div class="row h-25">
                            <div class="col">
                                <img :src="ingatlan.image" alt="" class="rounded-start h-50">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="img-container d-flex flex-row">
                    <img :src="ingatlan.image" alt="" class="rounded-start">
                    <img :src="ingatlan.image" alt="" class="">
                    <div class="d-flex flex-column w-auto">
                        <img :src="ingatlan.image" alt="" class="rounded-top w-auto h-50">
                        <img :src="ingatlan.image" alt="" class="rounded-end w-auto h-50">
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import sourceData from '../../data/db.json'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Ingatlan',
  components: {
    Navbar,
    Footer
  },
  computed: {
    ingatlanId () {
      return parseInt(this.$route.params.id)
    },
    ingatlan () {
      return sourceData.ads.find(ad => ad.adId === this.ingatlanId)
    }
  }
}
</script>

<style scoped>
#ingatlan{
    margin-top: 105px;
}
img {
    object-fit: cover;
}
</style>
